import React, { useContext,useState, useEffect } from 'react'
import { shopContext } from '../context/shopContext'
import Title from '../componant/Title'
import { Assets } from '../assets/Assets'
import Cart_total from '../componant/Cart_total'

export default function Cart() {
  const {product,currenecy,card_item,update_qty,navigate} =useContext(shopContext)
  const [card_date, setcard_date] = useState([])
  useEffect(() =>{
    const tem_date = [];
    for(const productid in card_item){
      for(const size in card_item[productid]){
        if(card_item[productid][size]>0){
        tem_date.push({
          _id :productid,
          size :size,
          qty :card_item[productid][size]
        })
        }
      }
    }
    console.log(tem_date);
    setcard_date(tem_date);
  },[card_item])

  return (
    <div className='border-t pt-7'>
      <div className='text-3xl mb-3'>
        <Title text1={'My'} text2={'Cart'}/>
      </div>
      <div>
        {
          card_date.map((item,index)=>{
            const cart_product = product.find((product)=>product._id===item._id)
            return(
              <div key={index}className='py-4 border-t border-b text-gray-700n grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20'src={cart_product.image[0]} alt="" />
                  <div >
                    <p className='text-xs sm:text-lg font-medium'>{cart_product.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currenecy}{cart_product.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1  bg-slate-200'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=>{if(e.target.value === 0 || e.target.value ===''){null}else{update_qty(item._id,item.size,Number(e.target.value))}}} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min='1' defaultValue={item.qty} />
                <img onClick={()=>update_qty(item._id,item.size,0)} className='w-4 mr-4  sm:w-5 cursor-pointer'src={Assets.bin} alt="" />
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'> 
        <div className='w-full sm:w-[450px]'>
          <Cart_total/>
          <div className='w-full text-end '>
            <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm px-8 py-3 mt-5'>Proceed to Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}
