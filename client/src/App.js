import React, { useContext } from 'react';
import { UserContext } from './context/userContext';
import RightSideBar from './Components/RightSideBarComponent/RightSideBar.Component';
import LeftSideBar from './Components/LeftSideBar/LeftSideBar.Component';
import Feed from './Components/Feed/Feed.Component';
import Navbar from './Components/Navbar/Navbar.Component';
import usePosts from './hooks/usePosts';
import "../src/index.css"; 


    

export default function App() {
    const userContext = useContext(UserContext);

    const { CurrentUser } = userContext;

    const name = CurrentUser ? CurrentUser.name : '';

    const username = CurrentUser ? CurrentUser.username : '';


 

  

  



  


  return (
    <div className="bg-gray-900">
    <div className='container mx-auto font-mono bg-gray-900 text-gray-100 min-h-screen '>
        <Navbar />
        <div className='flex justify-center p-2 '>

        <LeftSideBar name={name} username={username} />
        <Feed />
        <RightSideBar />
        </div>
        </div>
    </div>
  )
}
