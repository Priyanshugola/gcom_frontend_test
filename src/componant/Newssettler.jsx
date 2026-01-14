import React from 'react'

export default function Newssettler() {
  const submit = (e) =>{
    e.preventDefault();
  } 
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-700'>Subscribe Know & Get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Veritatis, consequuntur maxime. Cum nemo eos earum corporis accusantium, adipisci cupiditate 
         architecto aliquam vero, error dignissimos. Optio aliquid enim est obcaecati error!</p>
         <form onSubmit={submit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type='mail' placeholder="enter you mail" required  className='w-full sm:flex-1 outline-none'/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
         </form>
    </div>
  )
}
