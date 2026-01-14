import React,{useState} from 'react'

export default function login() {
  const [form_type, setform_type] = useState('Sign-Up')
  const onsubmithandler = async ()=>{
    event.preventDefault();
  }
  return (
    <form onSubmit={()=>onsubmithandler()} className='flex flex-col items-center w-[60%] sm:mas-w-96 m-auto mt-14 gap-1 text-gray-700'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className="prata-regular text-3x1" style={{fontFamily: 'sans-serif'}}>{form_type}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {form_type ==='login'?'':<input type="text" required className='w-full px-3 py-2 border border-gray-800' placeholder='Name'/>}
      <input type="email" required className='w-full px-3 py-2 border border-gray-800' placeholder='Email'/>
      <input type="Password" required className='w-full px-3 py-2 border border-gray-800' placeholder='Password'/>
      <div className='w-full flex justify-between text-sm mt-0'>
        <p className='cursor-pointer'>Forgot your Password?</p>
        {
          form_type === 'login'
          ? <p onClick={()=>setform_type('Sing up')} className='cursor-pointer'>Create Account</p>
          : <p onClick={()=>setform_type('login')} className='cursor-pointer'>Click to Login</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4 '>{form_type ==='login'?'Sing In': 'Sing Up'}</button>
    </form>
  )
}
