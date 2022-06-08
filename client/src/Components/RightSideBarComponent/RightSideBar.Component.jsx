import React from 'react'
import FriendCard from './FriendCard/FriendCard';
import {FaRegUser} from 'react-icons/fa'

export default function RightSideBar() {
  return (
    <div className='flex flex-col ml-4 text-center mt-4'>
      <h2 className='text-3xl leading-9'>Friends</h2>
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />

    </div>
  )
}
