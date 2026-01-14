import React, { useContext,useState,useEffect} from 'react'
import { shopContext } from '../context/shopContext'
import { Assets } from '../assets/Assets';
import Title from '../componant/Title';
import Product_item from '../componant/Product_item';

export default function Collaction() {
  const {product ,sreach,showsreach} = useContext(shopContext);
  const [showfiler, setshowfiler] = useState(false);
  const [all_product, setall_product] = useState([]);
  const [cat, setcat] = useState([]);
  const [subcat, setsubcat] = useState([]);
  const [sorttype, setsorttype] = useState('relevent')
  const toggle_cat = (e) =>{
    if(cat.includes(e.target.value)){setcat(prev => prev.filter(item => item !== e.target.value))}
    else{setcat(prev =>[...prev, e.target.value])}
  }
  const toggle_subcat = (e) =>{
    if(subcat.includes(e.target.value)){setsubcat(prev => prev.filter(item => item !== e.target.value))}
    else{setsubcat(prev =>[...prev, e.target.value])}
  }
  const apply = ()=>{
    let  product_copy = product.slice();
    if(showsreach && sreach){product_copy = product_copy.filter(item => item.name.toLowerCase().includes(sreach.toLowerCase()));}
    if(cat.length>0){product_copy = product_copy.filter(item => cat.includes(item.categroy));}
    if(subcat.length>0){product_copy = product_copy.filter(item => subcat.includes(item.subCategroy));}
    setall_product(product_copy);
  }
  const sortfilter = ()=>{
    let  fil_prod =  all_product.slice();
    switch(sorttype){
      case 'low-high':
        setall_product(fil_prod.sort((a,b)=>(a.price-b.price)));
        break
      
      case 'high-low':
        setall_product(fil_prod.sort((a,b)=>(b.price-a.price)));
        break
      
      default:
        apply();
        break
    }
  }
  useEffect(() => {setall_product(product);},[])
  useEffect(()=>{apply();},[cat,subcat,sreach,showsreach,product])
  useEffect(()=>{sortfilter();},[sorttype])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p onClick={()=>{setshowfiler(!showfiler)}} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filter
          <img className={`h-5 sm:hidden`}src={Assets.dropdwon} alt="" />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfiler?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Catogry</p>
          <div className='flex flex-col gap-2 text-em font-ligth text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Men'} onChange={toggle_cat}/>Men
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Women'} onChange={toggle_cat}/>Women
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Kids'} onChange={toggle_cat}/>Kids
            </p>
          </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfiler?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-em font-ligth text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Topwear'} onChange={toggle_subcat}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Bottomwear'} onChange={toggle_subcat}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Winterwear'} onChange={toggle_subcat}/>Winterwear
            </p>
          </div>
        </div>
      </div>
     <div className='flex-1'> 
      <div className='flex justify-between text-base sm:text-2x1 mb-4'>
          <Title text1={'All'} text2={'COLLACTION'} />
          <select onChange={(e)=>{setsorttype(e.target.value)}}className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevent">Sort to : Relevent</option>
            <option value="low-high">Sort to : Low to high</option>
            <option value="high-low">Sort to : Hign to low</option>
          </select>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-y-6' style={{}}>
        {
          all_product.map((item,index)=>(
            <Product_item key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
          ))
        }
      </div>
     </div> 
    </div>
  )
}
