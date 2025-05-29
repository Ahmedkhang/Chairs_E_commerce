"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full h-[203px] bg-white max-w-[1920px]">
        
            {/* {headlien} */}
            <div className="p-2 w-full h-[45px] text-center top-20px 2xl:left-[300px] bg-[#272343] text-white flex justify-between">
               <h3 className="md:px-10 lg:px-40">Free Shipping On All Orders Above $50</h3>
               <div className="hidden md:block">
                <ul className="flex gap-2 md:pr-10 lg:pr-40">
                    <li>Eng</li>
                    <li>FAQs</li>
                    <li>Need Help</li>
                </ul>
               </div>
            </div>


            {/* {logo*/} 

            <div className="bg-[#F0F2F3] w-full flex justify-between h-[84px] p-2">
               {/* logo */}
               <div className="w-[166px] h-40px flex gap-3 mt-3 md:px-4">
                 
               <Image src='/logo.png' alt="Logo" width={50} height={50} className="h-[50px]" />
                <span className="text-xl md:text-2xl mt-3 md:mt-2 font-bold">Comforty</span>
               </div>
                   <button>Cart</button>
            </div>

      
                   {/*Desktop Navbar */}
            <div className="w-full flex max-w-[1920px]  justify-between md:p-5 bg-white"
            onClick={toggleNav}
            >
                <ul className="md:flex hidden gap-3">
                  <li>Home</li>
                  <li>Shop</li>
                  <li>Pages</li>
               <Link href='/product'><li>Product</li></Link>  
                  <li>About</li>
                </ul>
                <p>Contact - +923152459574</p>

                  
            <button
          className="ml-auto mb-2 font-bold md:hidden"
          onClick={toggleNav}
          aria-expanded={isOpen}
          aria-label="Toggle Navigation"
        >
          ☰
        </button>

            </div>

              {/* Mobile Menu */}
              {isOpen && (
        <ul className="md:hidden h-[300px] flex flex-col gap-2 bg-red-200 p-5">
          <li onClick={() => setIsOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/shop">Shop</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/pages">Pages</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/product">Product</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      )}
        
    </nav>
  );
};

export default Navbar;
