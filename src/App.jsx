import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collaction from './pages/Collaction'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './componant/Navbar'
import Footer from './componant/Footer'
import Sreachbar from './componant/Sreachbar'
import {ToastContainer, toast} from 'react-toastify'


export default function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <Sreachbar />
      <Routes exect>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/collaction' element={<Collaction />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/product/:prod_id' element={<Product />} />
      </Routes>
      <Footer/>
    </div>
  )
}
