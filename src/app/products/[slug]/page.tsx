import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
// import { StarIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const query = groq`
    *[_type == "product" && slug.current == $slug][0]{
      _id,
      rating,
      originalPrice,
      price,
      name,
      description,
      slug,
      "image": image.asset->{
        url
      },
      "moreImages": moreImages[].asset->{
        url
      },
      category,
      features,
      availability,
      specifications
    }
  `;

  const product = await client.fetch(query, { slug: params.slug });

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800">Product Not Found</h1>
        <p className="mt-4 text-gray-600">The product you are looking for doesn&apos;t exist or has been removed.</p>
        <Link href="/" className="mt-8 px-6 py-2 bg-[#029FAE] text-white rounded-lg hover:bg-[#027a85] transition-colors">
          Return to Home
        </Link>
      </div>
    );
  }

  // Generate stars based on rating
  // const renderStars = (rating: number) => {
  //   const stars = [];
  //   // for (let i = 1; i <= 5; i++) {
  //   //   stars.push(
  //   //     <StarIcon 
  //   //       key={i} 
  //   //       size={18} 
  //   //       className={i <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} 
  //   //     />
  //     // );
  //   // }
  //   // return stars;
  // };

  // Calculate discount percentage
  const discountPercentage = product.originalPrice && product.price 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1920px] bg-[#F0F2F3] min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#029FAE]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-[#029FAE]">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{product.name}</span>
          </div>

          {/* Product details */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative h-80 md:h-96 bg-gray-100 rounded-lg overflow-hidden">
                  {product.image?.url && (
                    <Image
                      src={product.image.url}
                      alt={product.name}
                      fill
                      className="object-contain"
                      priority
                    />
                  )}
                  {discountPercentage > 0 && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                      {discountPercentage}% OFF
                    </div>
                  )}
                </div>

                {/* Additional images */}
                {product.moreImages && product.moreImages.length > 0 && (
                  <div className="grid grid-cols-4 gap-2">
                    {product.moreImages.slice(0, 4).map((img: any, idx: number) => (
                      <div key={idx} className="relative h-20 bg-gray-100 rounded-md overflow-hidden">
                        <Image
                          src={img.url}
                          alt={`${product.name} view ${idx + 1}`}
                          width={500}
                          height={350}
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-between">
                <div>
                  {product.category && (
                    <span className="text-sm text-[#029FAE] mb-2 block">{product.category}</span>
                  )}
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {/* <div className="flex">{renderStars(product.rating || 0)}</div> */}
                    <span className="text-sm text-gray-500">({product.rating}/5)</span>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl font-bold text-[#029FAE]">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg line-through text-gray-400">${product.originalPrice}</span>
                    )}
                  </div>

                  {product.description && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Description</h3>
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  )}

                  {/* Product Features */}
                  {product.features && product.features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Features</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {product.features.map((feature: string, idx: number) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Availability */}
                  {product.availability && (
                    <div className="mb-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        product.availability === "In Stock" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-red-100 text-red-700"
                      }`}>
                        {product.availability}
                      </span>
                    </div>
                  )}
                </div>

                {/* Add to Cart */}
                <div className="space-y-4 mt-8">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button className="px-4 py-2 text-xl font-bold">-</button>
                      <span className="px-4 py-2 border-x border-gray-300">1</span>
                      <button className="px-4 py-2 text-xl font-bold">+</button>
                    </div>
                    <button className="bg-[#029FAE] text-white px-6 py-2 rounded-lg flex-1 hover:bg-[#027a85] transition-colors">
                      Add to Cart
                    </button>
                  </div>
                  <button className="border border-[#029FAE] text-[#029FAE] px-6 py-2 rounded-lg w-full hover:bg-[#029FAE] hover:text-white transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Product Specs */}
            {product.specifications && (
              <div className="border-t border-gray-200 p-4 md:p-8">
                <h3 className="text-xl font-bold mb-4">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]: [string, any]) => (
                    <div key={key} className="flex justify-between px-4 py-2 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Related Products Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* This would be populated with related products */}
              {/* You'd need to fetch related products separately */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}