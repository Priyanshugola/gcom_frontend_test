import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { shopContext } from '../context/shopContext';

export default function Product_item(props) {
    const { id,image,name,price} = props;
    const {currenecy} = useContext(shopContext);
  return (
    <Link className='text-gray-600 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className="hover:scale-110 transition ease-in-out"src={image[0]} alt=''/>
      </div>
      <p className='pt-3 py-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currenecy}{price}</p>
    </Link>
  )
}
