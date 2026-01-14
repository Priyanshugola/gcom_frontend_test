import React from 'react'
import Title from '../componant/Title'
import { Assets } from '../assets/Assets'
import Newssettler from '../componant/Newssettler'

export default function About() {
  return (
    <div>
      <div className='text-2x1 text-center pt-8  border-t '>
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className="w-full md:max-w-[450px] h-[80vh]"src={Assets.about_us} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, ipsam cupiditate. Saepe sit ipsam in porro, eligendi quas autem deserunt possimus id, earum obcaecati dolorem ipsum, tempora corporis cum quo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, error velit aperiam magnam, ratione qui delectus non, molestiae adipisci accusantium nulla dolorum? Accusantium obcaecati aliquam, voluptatibus vero nesciunt corporis eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolorum eius a iusto, fuga blanditiis soluta sit maiores sequi pariatur eum tempore illum natus repellendus minus deleniti. Placeat, a possimus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, ipsam cupiditate. Saepe sit ipsam in porro, eligendi quas autem deserunt possimus id, earum obcaecati dolorem ipsum, tempora corporis cum quo?</p>
          <b className='text-gray-800'>Our Mission</b>   
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vero ipsam saepe earum cupiditate expedita sequi at, sit ducimus eaque qui rem quas minus? Odit tenetur incidunt ab aliquid ut?</p>     
        </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={'Why'} text2={'choose us'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>The best Quality proudct avalible with good material</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>The best user frindly proudct selling process</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional customer service:</b>
            <p className='text-gray-600'  >The best team avalible</p>
          </div>
      </div>
      <Newssettler/>
    </div>
  )
}
