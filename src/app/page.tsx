import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../pages/Men"), {
  ssr: false,
}); 
export default function Home() {
  return (
   <main>
    <Hero />
    <NewProducts />
    <Testimonial />
    <DynamicComponent />
   </main>
  )
}
