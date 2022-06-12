import React from 'react'

export default function UserCard(props) {
  return (
    <div className='flex border-y-2 border-x-2 rounded-3xl items-center border-gray-700'>
    <img src={props.profilePicture} className='h-[5rem] rounded-full inline-block mx-2 my-2' />
    <div className='flex flex-col text-lg leading-relaxed'>
        <h1 className='font-bold text-2xl mr-5 mt-2'>{props.name}</h1>
        <p className='text-sm mb-2'>@{props.username}</p>
        </div>
        </div>
  )
}
