import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='max-w-[1920px] bg-white'>
        <div className='w-full  min-h-screen  max-mx-[300px] flex flex-col md:flex-row md:items-center  bg-[#F0F2F3]'>
          {/* text div */}
           <div className='md:w-[50%] px-10'>
              <h1 className='text-2xl'>Welcome To Comforty</h1>
              <h1 className='font-bold text-3xl lg:text-6xl'>Best Furniture Collection for your interior.</h1>
              <button className='w-[120px] bg-[#029FAE] mx-5 my-5 text-white py-2 rounded-md'>Shop Now!</button>
           </div>
           {/* image div */}
           <div className='mx-auto'>
            <Image src='/heroimg.png' alt='chair' width={434} height={586} className='w-[370px] h-[506px] max-w-[434px] max-h-[586px]' />
           </div>
        </div>
    </div>
  )
}

export default Hero