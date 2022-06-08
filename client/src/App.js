import React from 'react';
import RightSideBar from './Components/RightSideBarComponent/RightSideBar.Component';
import LeftSideBar from './Components/LeftSideBar/LeftSideBar.Component';
import Feed from './Components/Feed/Feed.Component';
import Navbar from './Components/Navbar/Navbar.Component';

export default function App() {
  return (
    <div className=''>
        <Navbar />
        <div className='flex '>
        <LeftSideBar />
        <Feed />
        <RightSideBar />
        </div>
    </div>
  )
}
