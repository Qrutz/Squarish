import React from 'react'
import FriendCard from './FriendCard/FriendCard';
import {FaRegUser} from 'react-icons/fa'

export default function RightSideBar() {
  return (
    <div className='flex flex-col'>
      <h2>Friends</h2>
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />

    </div>
  )
}
