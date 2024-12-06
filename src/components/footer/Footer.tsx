'use client'

// import { footerData } from "@/data/data";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,

//   Send,
//   TwitterIcon,
// } from "lucide-react";
// import Image from "next/image";

// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="text-gray-600 body-font">
    

//       {/* cusfm */}
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap md:text-left text-center -mb-10 mx-auto">
//           <FooterLeft />

//           {footerData.map((section, index) => (
//             <div key={index} className="lg:w-1/5 md:w-1/2 w-full px-4">
//               <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
//                 {section.title}
//               </h2>
//               <nav className="list-none mb-10">
//                 {section.links.map((link, linkIndex) => (
//                   <li key={linkIndex}>
//                     <a href="#" className="text-gray-600 hover:text-gray-800">
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </nav>
//             </div>
//           ))}

//           <FooterRight />
//         </div>
//       </div>

//       <FooterBottom />
//     </footer>
//   );
// };

// export default Footer;

// // function FooterList() {
// //   return (
// //     <div className="lg:w-1/5 md:w-1/2 w-full px-4 ">
// //       <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
// //         CATEGORIES
// //       </h2>
// //       <nav className="list-none mb-10">
// //         <li>
// //           <a className="text-gray-600 hover:text-gray-800">First Link</a>
// //         </li>
// //         <li>
// //           <a className="text-gray-600 hover:text-gray-800">Second Link</a>
// //         </li>
// //         <li>
// //           <a className="text-gray-600 hover:text-gray-800">Third Link</a>
// //         </li>
// //         <li>
// //           <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
// //         </li>
// //       </nav>
// //     </div>
// //   );
// // }

// function FooterLeft() {
//   return (
//     <div className="lg:w-1/5 md:w-1/2 w-full px-4">
//       <h2>Exclusive</h2>
//       <h3>Subscribe</h3>
//       <p className="mb-2">Get 10% off your first order</p>

//       <div className="relative">
//         <input
//           type="text"
//           className="w-full bg-transparent border-2 border-white py-2 px-4 pr-10 rounded-md placeholder-gray-500 focus:outline-none"
//           placeholder="Enter email"
//         />
//         <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer" />
//       </div>
//     </div>
//   );
// }
// function FooterRight() {
//   return (
//     <div className="lg:w-1/5 md:w-1/2 w-full px-4 my-2">
//       <h2>Download App</h2>
//       <p>Save $3 with App New User Only</p>

//       {/* logo and qr code */}
//       <div className="flex mb-4">
//                                 <Image width={20} height={20} src="https://placehold.co/100x100" alt="QR code for app download" className="w-20 h-20 mr-2" />
//                                 <div>
//                                     <Image width={20} height={20} src="https://placehold.co/100x40" alt="Google Play Store" className="mb-2" />
//                                     <Image width={20} height={20} src="https://placehold.co/100x40" alt="Apple App Store" />
//                                 </div>
//                             </div>

//       {/* foote icons */}
//       <div className="flex gap-4 my-3 justify-center">
//         <Facebook />
//         <TwitterIcon />
//         <Instagram />
//         <Linkedin />
//       </div>
//     </div>
//   );
// }

// function FooterBottom() {
//   return (
//     <p className="text-center">
//       &copy; Copyright Rimel 2022. All right reserved
//     </p>
//   );
// }


import React, { useState } from 'react';
import { 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  QrCode 
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  // Column 2-4 Navigation Links
  const navigationColumns = [
    {
      heading: 'Quick Links',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Contact', url: '/contact' }
      ]
    },
    {
      heading: 'Customer Support',
      links: [
        { name: 'FAQ', url: '/faq' },
        { name: 'Shipping', url: '/shipping' },
        { name: 'Returns', url: '/returns' },
        { name: 'Help Center', url: '/help' }
      ]
    },
    {
      heading: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Cookies', url: '/cookies' },
        { name: 'Accessibility', url: '/accessibility' }
      ]
    }
  ];

  // Social Media Links
  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com' },
    { icon: Twitter, url: 'https://twitter.com' },
    { icon: Instagram, url: 'https://instagram.com' },
    { icon: Linkedin, url: 'https://linkedin.com' }
  ];

  const handleEmailSubmit = (e :any) => {
    e.preventDefault();
    // Add email submission logic here
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-5 gap-8">
        {/* Column 1: Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-gray-300 mb-4">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form onSubmit={handleEmailSubmit} className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 text-black rounded-l-lg"
              required
            />
            <button 
              type="submit" 
              className="bg-blue-600 p-2 rounded-r-lg hover:bg-blue-700"
            >
              <Send className="text-white" />
            </button>
          </form>
        </div>

        {/* Columns 2-4: Navigation Links */}
        {navigationColumns.map((column, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-4">{column.heading}</h2>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="text-gray-300 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Column 5: Download & Social */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Get Our App</h2>
          <p className="text-gray-300 mb-4">
            Download our mobile app for the best experience
          </p>
          
          {/* QR Code and App Store Buttons */}
          <div className="flex items-center space-x-4 mb-6">
            <QrCode className="h-20 w-20 text-white" />
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <img 
                  src="/api/placeholder/30/30" 
                  alt="Google Play" 
                  className="h-8 w-8"
                />
                <span>Google Play</span>
              </div>
              <div className="flex items-center space-x-2">
                <img 
                  src="/api/placeholder/30/30" 
                  alt="App Store" 
                  className="h-8 w-8"
                />
                <span>App Store</span>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition"
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8 pt-4 border-t border-gray-700">
        © {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;