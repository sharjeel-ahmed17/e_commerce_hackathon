import { footerData } from "@/data/data";
import {
  Facebook,
  Instagram,
  Linkedin,

  Send,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";

import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
    

      {/* cusfm */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 mx-auto">
          <FooterLeft />

          {footerData.map((section, index) => (
            <div key={index} className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                {section.title}
              </h2>
              <nav className="list-none mb-10">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      {link}
                    </a>
                  </li>
                ))}
              </nav>
            </div>
          ))}

          <FooterRight />
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;

// function FooterList() {
//   return (
//     <div className="lg:w-1/5 md:w-1/2 w-full px-4 ">
//       <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
//         CATEGORIES
//       </h2>
//       <nav className="list-none mb-10">
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">First Link</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">Second Link</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">Third Link</a>
//         </li>
//         <li>
//           <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
//         </li>
//       </nav>
//     </div>
//   );
// }

function FooterLeft() {
  return (
    <div className="lg:w-1/5 md:w-1/2 w-full px-4">
      <h2>Exclusive</h2>
      <h3>Subscribe</h3>
      <p className="mb-2">Get 10% off your first order</p>

      <div className="relative">
        <input
          type="text"
          className="w-full bg-transparent border-2 border-white py-2 px-4 pr-10 rounded-md placeholder-gray-500 focus:outline-none"
          placeholder="Enter email"
        />
        <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer" />
      </div>
    </div>
  );
}
function FooterRight() {
  return (
    <div className="lg:w-1/5 md:w-1/2 w-full px-4 my-2">
      <h2>Download App</h2>
      <p>Save $3 with App New User Only</p>

      {/* logo and qr code */}
      <div className="flex mb-4">
                                <Image width={20} height={20} src="https://placehold.co/100x100" alt="QR code for app download" className="w-20 h-20 mr-2" />
                                <div>
                                    <Image width={20} height={20} src="https://placehold.co/100x40" alt="Google Play Store" className="mb-2" />
                                    <Image width={20} height={20} src="https://placehold.co/100x40" alt="Apple App Store" />
                                </div>
                            </div>

      {/* foote icons */}
      <div className="flex gap-4 my-3 justify-center">
        <Facebook />
        <TwitterIcon />
        <Instagram />
        <Linkedin />
      </div>
    </div>
  );
}

function FooterBottom() {
  return (
    <p className="text-center">
      &copy; Copyright Rimel 2022. All right reserved
    </p>
  );
}
