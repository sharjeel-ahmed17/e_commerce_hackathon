import Card from "@/components/card/Card";
import TestimonialCard from "@/components/testimonial/Testimonial";
import { Apple, ArrowRight } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <div>

      {/* hero and category */}

      <div className="flex my-5 flex-col md:flex-row ">
    
        <div className="basis-[20%]">
          <ul className="uppercase">
            <li className="mb-2">woman fahion </li>
            <li className="mb-2">Mens fahsion </li>
            <li className="mb-2">eletronic </li>
            <li className="mb-2">home and life style </li>
            <li className="mb-2">medicine </li>
          </ul>
        </div>
        <div className=" relative basis-[80%] bg-black text-white flex flex-col md:flex-row p-8">
        <div className="absolute bottom-3 right-1/2 flex gap-2">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
          <div className="basis-[50%] flex my-10 items-center flex-col">
            <div className="flex gap-3 mr-auto"> <Apple/><span>iPhone 14 Series</span>   </div>
            <div className="text-[48px] leading-[60px]">Up to 10% off Voucher</div>
            <div className="flex gap-3 mr-auto"><span>Shop Now</span> <ArrowRight /></div>
          </div>
          <div className="basis-[50%]">
            <Image className="h-full w-full" src='/mb-1.jpg' width={100} height={100} alt="mobile "/>
          </div>
        </div>
      </div>

      {/* todays  */}

      <div className="my-5 flex gap-2">
        <div className="h-6 w-3 bg-red-700 rounded"></div>
        <p>Today’s</p>
      </div>

      {/* flah sale */}

      
      {/* hero and category end */}
      {/* <h2 className="mt-primary">sharjeel </h2>
      <h1 className="">shad cn button component</h1>
   <p className="text-green">sharjeel ali </p>
      <p className="text-white bg-btn">sharjeel</p> */}
      {/* <p>sharjeel</p> */}
      {/* <Button className="hover:bg-hoverbtnred">click me</Button>
      <p className=" text-background bg-yellow-950">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eveniet qui explicabo a nam aliquid at iusto nesciunt? Itaque pariatur, minus ducimus mollitia similique doloremque maiores assumenda exercitationem neque expedita?</p>
      <h4 className="bg-logoColor shadow-shadow1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate.</h4>
      <Image src='/Category-Gamepad.png' width={20} height={20} alt="123"/> */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-2 my-3">

      <Card/>
      <Card/>
      <Card/>
      <Card/>
</div>

    <TestimonialCard/>
    </div>
  );
};

export default Home;
