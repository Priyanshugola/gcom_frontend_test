import React from 'react'
import { Assets } from '../assets/Assets'

export default function Crosal() {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      <div className='w-full sm:w-1/2 flex  items-center justify-center py-10  sm:py-0 '>   
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-0.5 bg-[#414141] '></p>
                <p className='font-medium  text-sm md:text-base'>Our Best seller</p>
            </div>
            <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Product</h1>
            <div className='flex items-center gap-2'>
                <p className='font-semibold  text-sm md:text-base'>Shop know</p>
                <p className='w-8 md:w-11 h-0.5 bg-[#414141] '></p>
            </div>
        </div>
      </div>
      <img className='w-full sm:w-1/2 h-70 sm:h-60 md:h-80 object-cover' src={Assets.banner} alt="carosal-2" />
    </div>
  )
}
