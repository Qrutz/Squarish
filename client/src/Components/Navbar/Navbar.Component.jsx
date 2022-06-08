import React from 'react'
import Search from "./SearchComponent/Search.Component";
import {GrSquare} from 'react-icons/gr';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';

export default function Navbar() {
  return (
    // create a navbar with a logo, a search bar, and a friend icon
    <div className='flex justify-around p-4 border-b-2 border-gray-700 drop-shadow-lg  '>
        <div className='flex items-center text-3xl cursor-pointer'>
          <GrSquare />
          <h2 className='ml-2'>SQUARISH</h2>
        </div>
        <Search className="w-2/5" />
        <div className="text-4xl items-center cursor-pointer">
          <AiOutlineUsergroupAdd />
        </div>
    </div>


  )
}
