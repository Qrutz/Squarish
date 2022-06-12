import React, {useContext, useEffect} from 'react';
import RightSideBar from '../Components/RightSideBarComponent/RightSideBar.Component';
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar.Component';
import Feed from '../Components/Feed/Feed.Component';
import {UserContext} from '../context/userContext';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar.Component';


export default function Homepage() {
  const userContext = useContext(UserContext);

  const { CurrentUser } = userContext;

  const name = CurrentUser ? CurrentUser.name : '';

  const username = CurrentUser ? CurrentUser.username : '';

  useEffect(() => {

  
      console.log(CurrentUser);
    
  }
  , [CurrentUser]);
    


  return (
    <div className='font-mono bg-gray-900 text-gray-100 min-h-screen '>
      <Navbar />
    <div className='flex justify-center p-2 '>
      <LeftSideBar name={name} username={username} profilePicture={CurrentUser.profilePicture} />
        <Feed />
        {/* <RightSideBar /> */}
    </div>
    </div>
  )
}
