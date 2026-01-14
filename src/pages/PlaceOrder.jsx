import React,{ useContext, useState } from 'react'
import Title from '../componant/Title';
import Cart_total from '../componant/Cart_total';
import { Assets } from '../assets/Assets';
import { shopContext } from '../context/shopContext';

export default function PlaceOrder() {
  const [method, setmethod] = useState('cod')
  const {navigate} =useContext(shopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:w-[480px]'>
        <div className='text-xl y-3 '>
          <Title text1={'Delivery'} text2={'Information'}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-500 py-1.5 px-3.5 w-full' type='text' placeholder='First name'/>
          <input className='border border-gray-500 py-1.5 px-3.5 w-full' type='text' placeholder='last name'/>
        </div>
          <input className='border border-gray-500 py-1.5 px-3.5 w-full' type='email' placeholder='Enter mail'/>
          <input className='border border-gray-500 py-1.5 px-3.5 w-full' type='text' placeholder='street'/>
         <div className='flex gap-3'>
          <input className='border border-gray-500 py-1.5 px-3.5 w-full' type='text' placeholder='City'/>
          <input className='border border-gray-500 py-1.5 px-3.5 w-full' type='text' placeholder='State'/>
        </div>
         <div className='flex gap-3'>
          <input className='border border-gray-500 py-1.5 px-3.5 w-full' type='number' placeholder='Zip code'/>
          <input className='border border-gray-500 py-1.5 px-3.5 w-full' type='text' placeholder='Country'/>
        </div>
          <input className='border border-gray-500 py-1.5 px-3.5 w-full' type='number' placeholder='Phone'/>
      </div>

      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <Cart_total/>
        </div>
        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'}/>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setmethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  rounded-full ${method ==='stripe'?'bg-gray-700':''}`}></p>
              <img className='h-5 mx-4'src={Assets.stripe} alt="" />
            </div>
             <div onClick={()=>setmethod('rezorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  rounded-full ${method ==='rezorpay'?'bg-gray-700':''}`}></p>
              <img className='h-5 mx-4'src={Assets.rezorpay} alt="" />
            </div>
             <div onClick={()=>setmethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5  rounded-full ${method ==='cod'?'bg-gray-700':''}`}></p>
              <p className='text-gray-700 text-sm font-medium mx-4 '>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8 '>
            <button onClick={()=>navigate('/orders')}className='bg-black text-white px-16 py-3 text-sm'>Plcee Order</button>
          </div>

        </div>
      </div>
    </div>
  )
}
