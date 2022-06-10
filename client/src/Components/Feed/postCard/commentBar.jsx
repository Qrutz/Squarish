import React from 'react';
import {VscSmiley} from 'react-icons/vsc'
import {FaImage} from 'react-icons/fa'

export default function CommentBar() {
  return (
    <div className=" md:mr-3 w-full rounded-full bg-gray-800  flex items-center border border-transparent transition focus-within:border-blue-400 focus-within:text-blue-400 text-gray-500">
    
    <input
      className="bg-transparent w-96 focus:outline-none px-4 py-2 text-gray-100 "
      placeholder="Write your comment"
    />
    <VscSmiley className="hidden md:block text-gray-100 dark:text-gray-100 mr-4 hover:text-3xl cursor-pointer" />
    <FaImage className="hidden md:block text-gray-100 dark:text-gray-100 mr-4 hover:text-3xl cursor-pointer" />

  </div>
  )
}
