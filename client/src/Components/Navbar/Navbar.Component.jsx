import React, {Fragment} from 'react'
import Search from "./SearchComponent/Search.Component";
import {GrSquare} from 'react-icons/gr';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {Outlet} from 'react-router-dom';

export default function Navbar() {
  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = '/login';
  }





  return (
    <Fragment>
    <div className='flex justify-evenly p-4 border-b-2 border-gray-700 drop-shadow-lg  '>
        <div className='flex items-center text-4xl cursor-pointer'>
          <GrSquare />
          <h2 className='ml-2'>SQUARISH</h2>
        </div>
        <Search className="w-2/5" />
        <div className="text-4xl items-center cursor-pointer flex">
          <AiOutlineUsergroupAdd />
          <button className='ml-3 cursor-pointer' onClick={handleLogout}>Logout</button>
        </div>
    </div>
    <Outlet />
    </Fragment>
    


  )
}
