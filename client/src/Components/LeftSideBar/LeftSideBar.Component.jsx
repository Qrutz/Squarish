import React, {Fragment} from 'react'
import UserCard from './UserCard/UserCard'
import TabList from './TabList/TabList'
import {Outlet} from 'react-router-dom'


export default function LeftSideBar(props) {
 
  return (
    <Fragment>
    <div className='md:flex flex-col p-4 mt-2 hidden'>
        <UserCard name={props.name} username={props.username} profilePicture={props.profilePicture }  />
        <TabList />
    </div>
    <Outlet />
    </Fragment>
  )
}
