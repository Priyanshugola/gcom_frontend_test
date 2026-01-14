import React  ,{useState, useEffect}from 'react'
import { useContext } from 'react'
import { shopContext } from '../context/shopContext';
import Title from './Title';
import Product_item from './Product_item';

export default function Lestcolleaction() {
  const  {product} =useContext(shopContext);
  // console.log(product);
  const [latestproduct, setlatestproduct] = useState([])
  useEffect(() => {
    setlatestproduct(product.slice(0,10))
  }, [product])
  // console.log(setlatestproduct)
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"Latest"} text2={"Collaction"} />
        <p className="text-sm text-gray-900">This is the collaction of our lastest products with the elegent design and diffrent verients</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestproduct.map((item,index)=>(
            <Product_item key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}
