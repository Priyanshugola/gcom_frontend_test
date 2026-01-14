import { useContext, useState } from "react"
import React from 'react'
import { Assets } from "../assets/Assets"
import { Link, NavLink } from 'react-router-dom'
import { shopContext } from "../context/shopContext"
export default function Navbar() {
  const [visible ,setvisible] = useState(false)
  const {setshowsreach,get_card_count} =useContext(shopContext);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to="/"><img src={Assets.logo} className='w-20' /></Link>
      <ul className='hidden  sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/collaction" className="flex flex-col items-center gap-1">
          <p>Collaction</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact us</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center  gap-6'>
        <img onClick={() =>{setshowsreach(true)}}src={Assets.search} className='w-10 cursor-pointer' alt="" />
        <div className='group cursor-pointer'>
          <Link to="/login"><img src={Assets.profile} className='w-10 cursor-pointer' alt="" /></Link>
          <div className='group-hover:block hidden absolute dropdown-menu rigth-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Cart</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className='relative'> <img src={Assets.cart} className='w-10 cursor-pointer' alt=""/>
        <p className="absolute right-0 bottom-[5px] w-4 text-center leading-4 bg-black text-white aspect-square 
        rounded-full text-[8px]">{get_card_count()}</p>
          </Link>
        <img onClick={()=>{setvisible(true)}} src={Assets.menu} className='w-10 cursor-pointer sm:hidden' alt="" />
          </div>
      {/* side nav bar */}
       <div className={`absolute top-0 rigth-0 bottom-0 left-0 overflow-hidden bg-white transition-all duration-300  ${visible ? 'w-100':'w-0'}`}>
          <div className=" flex flex-col text-gray-600">
            <div  onClick={()=>{setvisible(false)}} className="flex items-center p-3 gap-4 cursor-pointer">
                <p>Back</p>
            </div>
            <NavLink onClick={()=>{setvisible(false)}} className="py-2 pl-6 border" to="/">Home</NavLink>
            <NavLink onClick={()=>{setvisible(false)}} className="py-2 pl-6 border" to="/collaction">Collaction</NavLink>
            <NavLink onClick={()=>{setvisible(false)}} className="py-2 pl-6 border" to="/about">About</NavLink>
            <NavLink onClick={()=>{setvisible(false)}} className="py-2 pl-6 border" to="/contact">Contact us</NavLink>
          </div>
      </div>
    </div>
  )
}
