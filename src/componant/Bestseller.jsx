import React,{useState,useEffect, useContext } from 'react'
import { shopContext } from '../context/shopContext';
import Title from './Title';
import Product_item from './Product_item';

export default function best_seller() {
   const  {product} =useContext(shopContext);
    const[best_seller, setbest_seller] = useState([])
    useEffect(() => {
     const best_seller_prod =  product.filter((item)=>(item.bestseller));
     setbest_seller(best_seller_prod.slice(0,5))
    }, [product])
  return (
     <div className='my-10'>
          <div className='text-center py-8 text-3xl'>
            <Title text1={"Best"} text2={"Seller"} />
            <p className="text-sm text-gray-900">This is the collaction of our lastest products with the elegent design and diffrent verients</p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
              best_seller.map((item,index)=>(
                <Product_item key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
              ))
            }
          </div>
        </div>
  )
}
