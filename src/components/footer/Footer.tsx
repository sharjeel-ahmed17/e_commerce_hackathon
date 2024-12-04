import { Send } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap md:text-left text-center -mb-10 mx-auto">
       <div className='lg:w-1/5 md:w-1/2 w-full px-4'>
       <h2>Exclusive</h2>
       <h3>Subscribe</h3>
       <p className='mb-2'>Get 10% off your first order</p>
   

       <input type="text" className='bg-transparent p-2 border-2 border-white relative' placeholder='enter your email'/>
  <Send className='absolute right-2 top-2' color='black'/>
       </div>
       <FooterList/>
       <FooterList/>
       <FooterList/>
       <div className='lg:w-1/5 md:w-1/2 w-full px-4 my-2'>sharjeel</div>
      </div>
    </div>
   
    
  </footer>
  

  
  
  )
}

export default Footer


function FooterList (){
  return(
    <div className="lg:w-1/5 md:w-1/2 w-full px-4 ">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            CATEGORIES
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
  )
}