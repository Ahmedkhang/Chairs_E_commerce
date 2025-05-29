import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'
import Hero from "@/components/Hero";
import New from '@/components/new'
// import New from '@/components/new'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <New /> 
    <Footer />
    </>
  );
}
