import React, { useContext } from 'react'
import { shopContext } from '../context/shopContext'
import Title from './Title'

export default function Cart_total() {
    const{currenecy,delhivery_fee,get_total_amt} = useContext(shopContext)
  return (
    <div className='w-full'>
        <div className='text-3x1'>
            <Title text1={'Cart'} text2={'Total'}/>
        </div>
        <div className='flex flex-col gap-2 text-sm'>
            <div className='flex justify-between'>
                <p>SubTotal</p>
                <p>{currenecy}{get_total_amt()}.00</p>
            </div>
            <hr />  

            <div className='flex justify-between'>
                <p>Delivery Charge</p>
                <p>{currenecy}{delhivery_fee}.00</p>
            </div>
            <hr /> 

            <div className='flex justify-between'>
                <p>Delivery Charge</p>
                <p>{currenecy}{get_total_amt()===0 ? 0 :get_total_amt()+delhivery_fee}.00</p>
            </div> 
        </div>
      
    </div>
  )
}
