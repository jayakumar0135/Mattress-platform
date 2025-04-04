import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>It looks like you're trying to describe an eCommerce platform. Could you clarify what details you need? Are you looking for</p>
           <p>It looks like you're trying to describe an eCommerce platform. Could you clarify what details you need? Are you looking for</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>It looks like you're trying to describe an eCommerce platform. Could you clarify what details you need? Are you looking for</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} /> 

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Quality Assurance:</b>
             <p className='text-gray-600'>It looks like you're trying to describe an eCommerce platform. Could you clarify what details you need? Are you looking for</p>
          </div>
   
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Convenience:</b>
             <p className='text-gray-600'>It looks like you're trying to describe an eCommerce platform. Could you clarify what details you need? Are you looking for</p>
             </div>
  
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
             <b>Exceptional Customer Service:</b>
             <p className='text-gray-600'>It looks like you're trying to describe an eCommerce platform. Could you clarify what details you need? Are you looking for</p>
             </div>
        </div>

          <NewsletterBox/>
         </div>
  )
}

export default About
