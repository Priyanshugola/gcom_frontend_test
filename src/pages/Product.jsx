import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopContext } from '../context/shopContext';
import Reltedprod from '../componant/Reltedprod';

export default function Product() {
  const {prod_id} = useParams();
  const {product,currenecy ,add_to_cart} =  useContext(shopContext);
  const [prod_data, setprod_data] = useState(false)
  const [main_img, setmain_img] = useState('')
  const [size, setsize] = useState('')
  const fetch_prod = async ()=>{
    product.map((item)=>{
      if(item._id ===prod_id){
        setprod_data(item)
        setmain_img(item.image[0])
        // console.log(item)
        return null;
      }
    })
  }
  useEffect(()=>{fetch_prod();},[prod_id,product])
  return prod_data ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between  sm:justify-normal sm:w-[18.7%] w-full'>
            {
              prod_data.image.map((item,index)=>(
                <img src={item} onClick={()=>setmain_img(item)}key={index} className='w-[24%] sm:w-full hover:scale-90 overflow-x-hidden transition ease-in-out sm:mb-3 shrink-0 curser-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={main_img} className='w-full h-auto' alt="" />
          </div>
        </div>
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-1'>{prod_data.name}</h1>
          <p className='font-medium text-3xl mt-5'>{currenecy}{prod_data.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{prod_data.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select size</p>
            <div className='flex gap-2'>
            {
              prod_data.size.map((item,index)=>(
                <button key={index} onClick={()=>setsize(item)} className={` border  py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-400':''} ` }>{item}</button>
              ))
            }
            </div>
          </div>
          <button onClick={()=>{add_to_cart(prod_data._id,size);}} className='bg-black text-white px-8 py-3 active:bg-gray-600'>Add to cart</button>
          <hr className='mt-8 sm:4/5'/>
          <div className='text-sm text-gray-600 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery in available on this product.</p>
            <p>Easy return and exchange policy within 7 day</p>
          </div>
        </div>
      </div>
      <div className='mt-20'>
          <div className='flex'>
            <p className=' border px-5 py-3 text-sm'>Description</p>
          </div>
          <div className=' flex- flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>There is the section long description shown</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam fugiat magni vel necessitatibus quas voluptates molestiae dignissimos nobis atque. Mollitia est itaque, molestias ducimus sit rem delectus tempora aut natus?</p>
          </div>
      </div>
      <Reltedprod category={prod_data.categroy} subcatgory={prod_data.subCategroy}/>
    </div>
  ): <div className='opacity-0'></div>
}
