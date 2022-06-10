import React from 'react'
import {BsSearch} from 'react-icons/bs'

export default function Search() {
  return (
    <div className=" hidden md:flex rounded-full bg-gray-800  items-center border border-transparent transition focus-within:border-blue-400 focus-within:text-blue-400 text-gray-500">
    
    <input
      className="bg-transparent w-full focus:outline-none px-4 py-2 text-gray-100"
      placeholder="Search"
    />
    <BsSearch className="text-gray-500 dark:text-gray-100 mr-4" />
  </div>
  )
}
