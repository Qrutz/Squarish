import React from 'react'
import {FaRegUser} from 'react-icons/fa'
import UserCard from './UserCard/UserCard'
import TabList from './TabList/TabList'


export default function LeftSideBar() {
  return (
    <div className='flex flex-col p-4 mt-2'>
        <UserCard name="Ahmad Nur Farwaid" username="fawaii" profilePicture={FaRegUser }  />
        <TabList />
    </div>
  )
}
