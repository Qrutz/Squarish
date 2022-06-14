import React, { useEffect } from 'react'
import {BsSearch} from 'react-icons/bs'
import axios from 'axios';
import hardcode from './hardcodeduser';
import SearchDropdown from './searchDropdown';

export default function Search() {
  const [users, setUsers] = React.useState([]);
  const [userArrCopy, setUserArrCopy] = React.useState([]);
  const [toggle, setToggle] = React.useState(false);
  const [search, setSearch] = React.useState('');

  async function onActive() {
    const res = await axios.get('http://localhost:5000/api/users/users/GetAllUsers');
    setUsers(res.data);
    setToggle(!toggle);
  }

  function onChange(e) {
    setSearch(e.target.value);
    setUserArrCopy(users.filter(user => user.username.toLowerCase().includes(e.target.value.toLowerCase())));

  }




  return (
    <div  className='relative'>
    <div className=" hidden md:flex rounded-full bg-gray-800  items-center border border-transparent transition focus-within:border-blue-400 focus-within:text-blue-400 text-gray-500">
    
    <input
      className="bg-transparent w-full focus:outline-none px-4 py-2 text-gray-100"
      placeholder="Search" onFocus={onActive} onChange={onChange} value={search}  
    />
     
   
    <BsSearch className="text-gray-500 dark:text-gray-100 mr-4" />
    
  </div>
  <div className='flex flex-col z-10 relative   '>
  {toggle ? userArrCopy.map(user => <SearchDropdown key={user._id} username={user.username} profilePic={user.profilePicture} />) : null}
  </div>
  </div>


  )
}
