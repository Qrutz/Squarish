import React, {useContext} from 'react';
import RightSideBar from '../Components/RightSideBarComponent/RightSideBar.Component';
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar.Component';
import Feed from '../Components/Feed/Feed.Component';
import {UserContext} from '../context/userContext';
import { Routes, Route, Link } from "react-router-dom";


export default function Homepage() {
  const userContext = useContext(UserContext);

  const { CurrentUser } = userContext;

  const name = CurrentUser ? CurrentUser.name : '';

  const username = CurrentUser ? CurrentUser.username : '';


  return (
    <div className='flex justify-center p-2 '>
      <LeftSideBar name={name} username={username} />
        <Feed />
        <RightSideBar />
    </div>
  )
}
