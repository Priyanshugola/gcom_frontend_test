import React from 'react'
import { Assets } from '../assets/Assets'

export default function Ourpolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gao-12 sm-gap-2 
    text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={Assets.return_policy} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Exchange policy</p>
            <p className='text-gray-700'>Easy exchange policy</p>
        </div>
        <div>
            <img src={Assets.quality} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Quality</p>
            <p className='text-gray-700'>Quality products</p>
        </div>
        <div>
            <img src={Assets.support} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Support</p>
            <p className='text-gray-700'>24/7 support</p>
        </div>
    </div>
  )
}
