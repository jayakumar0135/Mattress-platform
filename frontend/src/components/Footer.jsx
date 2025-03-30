import React from 'react';
import { assets } from '../assets/assets';


const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
             <img src={assets.logo} className='mb-5 w-32' alt="" />
             <p className="w-full md:w-2/3 text-gray-600">
             Discover the perfect blend of luxury and support with our premium mattresses. Crafted for deep, restful sleep, so you wake up refreshed every morning.
             </p>
             </div>

        <div>
            <p className='text-xl font-medium mb-3'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
        
        <div>
            <p className='text-xl font-medium mb-5'> 
                GET IN TOUCH
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9984157231</li>
                    <li>jayakumar@gmail.com</li>
                </ul>
           </div>
      
    </div>
    <div>
    <hr/>
    <p className='py-5 text-sm text-center'>Copyright 2025@ DeepNest.com - All Rights Reserved</p>
</div>
</div>
  )
}

export default Footer
