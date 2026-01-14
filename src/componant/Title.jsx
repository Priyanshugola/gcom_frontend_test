import React from 'react'

export default function Title(props) {
  return (
    <div className='inline-flex gap-2  items-center mb-2'>
        <p className='text-gray-500'>{props.text1} <span className='text-gray-700 font-medium'>{props.text2}</span></p>
        <p className='w-8 sm:w-12 h-px sm:h-0.5 bg-gray-900'></p>
    </div>
  )
}
