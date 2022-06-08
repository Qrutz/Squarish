import React from 'react'
import {FaRegUser} from 'react-icons/fa'
import UserCard from './UserCard/UserCard'
import TabList from './TabList/TabList'


export default function LeftSideBar() {
  return (
    <div className='flex flex-col p-4 mt-2'>
        <UserCard profilePicture={FaRegUser } />
        <TabList />
        
        

    </div>
  )
}
