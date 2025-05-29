import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Image from 'next/image'
import Link from 'next/link'

export default async function Product({params = {slug: ["new"]}}:{params?: {slug: string[]}}) {
  const query = groq`
  *[_type == "product" && "new" in tags]{
    _id,
    rating,
    originalPrice,
    price,
    name,
    slug,
    "image": image.asset->{
      url
    }
  }
  `;

  const response = await client.fetch(query);
  if (!response || response.length === 0) {
    return <p>No products found</p>;
  }
  
  return (
    <div className="w-full max-w-[1920px] bg-[#F0F2F3]">
      <h1 className="font-bold p-5 text-5xl">New Arrivals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 ml-5 lg:grid-cols-3">
        {response.map((items:any,index:number) => (
          <div className="max-w-[320px] bg-white/85 mb-2 p-5 rounded-xl" key={index}>
            <Link href={`/products/${items.slug.current}`}>
              <div className="max-w-[400px] h-[250px] mb-1">
                {items.image?.url && (
                  <Image src={items.image.url} alt='' width={400} height={300} className="w-full lg:w-[300px] lg:h-[250px]" />
                )}
              </div>
            </Link>
            <p className="text-center mt-2">{items.name}</p>
            <div className="w-full flex gap-5 justify-center">
              <del className="text-red-600">${items.originalPrice}</del>
              <span className="text-green-500">${items.price}</span>
            </div>
            <p className="mb-2 text-center">⭐{items.rating}/5</p>
            <Link href={`/products/${items.slug.current}`} className="block">
              <button className="bg-[#029FAE] text-white duration-500 hover:text-black hover:bg-white w-full py-1.5 rounded-lg">
                View Product
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}