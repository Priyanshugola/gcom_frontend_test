import React from 'react'
import Title from '../componant/Title'
import { Assets } from '../assets/Assets'
import Newssettler from '../componant/Newssettler'
export default function Contact() {
  return (
    <div>
        <div className='text-2x1 text-center pt-8  border-t '>
              <Title text1={'Contact'} text2={'Us'}/>
        </div>
        <div className='my-10 flex flex-col md:flex-row gap-10 mb-28 justify-center'>
           <img className="w-full md:max-w-[450px]"src={Assets.about_us} alt="" />
           <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-400'>123 street <br />modal town, new delhi</p>
            <p className='text-gray-400'>Tel:9876543210 <br />Email: golabhai@gmail.com</p>
            <p className='font-semibold text-xl text-gray-600'>Career on gola bhai</p>
            <p className='text-gray-400'>Learn more about our team and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
           </div>
        </div>
        <Newssettler/>
    </div>
  )
}
