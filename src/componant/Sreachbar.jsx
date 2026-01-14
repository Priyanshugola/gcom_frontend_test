import { useContext, useEffect,useState } from 'react'
import { shopContext } from '../context/shopContext'
import { Assets } from '../assets/Assets';
import {useLocation} from 'react-router-dom'

export default function Sreachbar() {
    const {sreach , setsreach,showsreach , setshowsreach}= useContext(shopContext);
    const [visible, setvisible] = useState(false)
    const location = useLocation();
    useEffect(()=>{
      if(location.pathname.includes('collaction')){
          setvisible(true)
      }else{
          setvisible(false)
      }
    },[location])
  return showsreach && visible ? ( 
    <div className='border-t border-b bg-gray-50 text-center '>
      <div className='inline-flex items-center justify-center border border-gray-600 px-5 py-2 my-2 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={sreach} onChange={(e)=>{setsreach(e.target.value)}} className='flex-1 outline-none  bg-inherit text-sm' type="text" placeholder='Sreach Here..' />
        <img className='w-6 h-6' src={Assets.search} alt="sreach image" />
      </div>
      <img className='w-4 h-4' onClick={()=>{setshowsreach(false)}} style={{ float: 'right',marginTop:'20px'}} src={Assets.cross_icon}  />
    </div>
  ):null
}

   