import { Eye, Heart, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

// const Card = () => {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-10 mx-auto">
//         <div className="flex flex-wrap justify-center -m-4">
//           <ChildCard />
//           <ChildCard />
//           <ChildCard />
//           <ChildCard />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Card;

export default function Card() {
  return (
   
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className="relative">
          <Image
            width={200}
            height={200}
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="https://dummyimage.com/722x402"
            alt="blog"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-red-500 p-[3px_8px] rounded">-40%</span>
          </div>
          <Heart className="absolute top-4 right-4"/>
          {/* <Trash2 className="absolute top-4 right-4"/> */}
          <Eye className="absolute top-12 right-4"/>
{/* buttons */}
          <div className="absolute bottom-0 w-full">
<Button className="w-full">Add To Cart</Button>
          </div>
        </div>
        <div className="py-6">
          <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
            Shooting Stars
          </h3>
          <div className="flex gap-4">
            <span className="text-red-600">$960</span>
            <span>
              <del>$960</del>
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Star fill="yellow" stroke="none" />
            <Star fill="yellow" stroke="none" />
            <Star fill="yellow" stroke="none" />
            <Star fill="yellow" stroke="none" />
            <Star fill="yellow" stroke="none" />
            <span>(85)</span>
          </div>
        </div>
      </div>
 
  );
}
