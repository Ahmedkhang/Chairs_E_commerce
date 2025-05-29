'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  return (
   <footer className='w-full h-auto md:max-h-[418px] max-w-[1920px] bg-[#ffffff] flex flex-col md:flex-row'>
    
    <div className='p-5 w-[350px] h-auto '>
     <div className='flex gap-3'>
      
     <Image src='/logo.png' alt='Logo' width={50} height={50} className='w-[50px] h-[50px]' />
      <span className="text-xl md:text-2xl mt-3 md:mt-2 font-bold">Comforty</span>
     </div>

      
      <div className='mt-3  mb-2 w-[200px] max-w-[350px] '>
        <p>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
        Cras egestas purus </p>
      </div>

      {/* icons */}

      <div className='flex '>
      <Link href='#'>  <Image src='/fb.png' alt='' width={38} height={38} /></Link>
      <Link href='#'><Image src='/yt.png' alt='' width={38} height={38} /></Link>
      <Link href='#'><Image src='/pinterest.png' alt='' width={38} height={38} /></Link>
      <Link href='#'><Image src='/insta.png' alt='' width={38} height={38} /></Link>
      </div>

              
    </div>

    {/* category */}

    <div className='w-[150px] h-[223px] mt-6 px-5 md:px-2 lg:px-5'>
       <h1 className='text-lg mt-3 font-bold'>Category</h1>
      <ul className='flex flex-col gap-0.8 mb-3'>
        <li>Sofa</li>
        <li>Arm Chair</li>
        <li>Wing Chair</li>
        <li>Desk Chair</li>
        <li>Wooden Chair</li>
        <li>Park Bench</li>
      </ul>

    </div>

    {/* support */}

    
    <div className='w-[250px] h-[223px] mt-6 px-5'>
       <h1 className='text-lg mt-3 font-bold'>Support</h1>
      <ul className='flex flex-col gap-0.8 mb-3'>
        <li>Help & Support</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Help</li>
      </ul>

    </div>

    
    <div className='w-[150px] h-[223px] md:hidden lg:block  mt-10 md:px-2 '>
       <h1 className='text-lg font-bold'>NewsLetter</h1>
      
      <div className='flex gap-2'> 
        <input type="email" name="email" id="email" placeholder='Email' className='border-[1px] md:w-[100px] lg:w-[220px] px-2 border-gray-400 bg-white/40' />
        <button type='submit' className='max-w-[127px] h-[40px] px-2 hover:bg-white hover:text-black duration-500 text-white rounded-md bg-[#029FAE]'>Subscribe</button>
      </div>

      <p className='w-[300px] lg:w-[350px] md:w-[200px] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>

    </div>


   </footer> 
  )
}

export default Footer