import React from 'react'
import {Link} from 'react-router-dom'

export default function FriendCard(props) {
  return (
    <Link to={`/user/${props.username}`}>
    <div className='flex items-center mt-5 text-2xl p-2 hover:bg-slate-800 cursor-pointer rounded-lg border-2 border-gray-800 '>
        <props.profilePicture  />
        <h2 className='ml-2'>{props.name}</h2>
    </div>
    </Link>
  )
}
