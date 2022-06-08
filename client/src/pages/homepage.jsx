import React, {Component} from 'react';
import RightSideBar from '../Components/RightSideBarComponent/RightSideBar.Component';
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar.Component';
import Feed from '../Components/Feed/Feed.Component';
import Navbar from '../Components/Navbar/Navbar.Component';

export default function Homepage() {
  return (
    <>
        <Navbar />
        <LeftSideBar />
        <Feed />
        <RightSideBar />
    </>
  )
}
