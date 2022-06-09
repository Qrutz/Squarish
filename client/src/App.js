import React from 'react';
import RightSideBar from './Components/RightSideBarComponent/RightSideBar.Component';
import LeftSideBar from './Components/LeftSideBar/LeftSideBar.Component';
import Feed from './Components/Feed/Feed.Component';
import Navbar from './Components/Navbar/Navbar.Component';
import "../src/index.css";

export default function App() {
  return (
    <div className="bg-gray-900">
    <div className='container mx-auto font-mono bg-gray-900 text-gray-100 min-h-screen '>
        <Navbar />
        <div className='flex justify-center p-2 '>
        <LeftSideBar />
        <Feed />
        <RightSideBar />
        </div>
        </div>
    </div>
  )
}
