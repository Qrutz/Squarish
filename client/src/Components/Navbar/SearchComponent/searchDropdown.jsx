import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchDropdown(props) {
  return (
 <Link to={`/user/${props.username}`}>
  <div className='flex border-2 rounded-lg border-gray-700 p-[4px]'> 
  <img className='h-[2rem] rounded-full' src={props.profilePic} />
  <p className='ml-5'>{props.username}</p>
  </div>  
  </Link>
  )
}
