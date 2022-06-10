import React from 'react'

export default function TabCard(props) {
  return (
    <div className='mt-4 flex items-center border-2 border-gray-800 p-2 cursor-pointer rounded-lg hover:bg-slate-800  '>
    <props.icon className='text-3xl mr-4 ml-6 ' />
    <h1 className='text-3xl hidden md:block'>{props.title}</h1>
    </div>
  )
}
