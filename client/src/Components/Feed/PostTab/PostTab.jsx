import React from 'react'
import {VscSmiley} from 'react-icons/vsc'
import {FaImage} from 'react-icons/fa'

export default function PostTab() {
  return (
    <div className='flex flex-col border-2 border-gray-700 rounded-md'>
        <div className='border-b-2 border-gray-700'> 
        <h2>Post something</h2>
        </div>
        <div className=" rounded-full bg-gray-800  flex items-center border border-transparent transition focus-within:border-blue-400 focus-within:text-blue-400 text-gray-500">
    
    <input
      className="bg-transparent w-96 focus:outline-none px-4 py-2 text-gray-100 "
      placeholder="What's on your mind?"
    />
    <VscSmiley className="text-gray-100 dark:text-gray-100 mr-4 hover:text-3xl cursor-pointer" />
    <FaImage className="text-gray-100 dark:text-gray-100 mr-4 hover:text-3xl cursor-pointer" />

  </div>
    </div>
  )
}
