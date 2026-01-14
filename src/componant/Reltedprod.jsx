import React, { useContext,useState,useEffect } from 'react'
import { shopContext } from '../context/shopContext'
import Title from './Title';
import Product_item from '../componant/Product_item';


export default function Reltedprod({category , subcatgory}) {
    const {product} = useContext(shopContext);
    const [releted_prod, setreleted_prod] = useState([]);
    useEffect(() => {
        if(product.length >0){
            let prod_copy = product.slice();
            prod_copy = prod_copy.filter((item) => category ===item.categroy)
            prod_copy = prod_copy.filter((item) => subcatgory ===item.subCategroy)
            // console.log(prod_copy.slice(0,5))
            setreleted_prod(prod_copy.slice(0,5));
        }
    }, [product])
  return (
    <div className='mt-10'>
      <div className='text=center text-3xl py-2'>
        <Title text1={'Releted'} text2={'Products'}/>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            releted_prod.map((item,index)=>(
                <Product_item key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>    
            ))
        }
      </div>
    </div>
  )
}
