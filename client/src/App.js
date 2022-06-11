import React, { useContext } from 'react';
import { UserContext } from './context/userContext';
import Homepage from './pages/homepage';
import { Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import "../src/index.css";
import { useEffect } from 'react';



    

export default function App() {
  const userContext = useContext(UserContext);

  const { CurrentUser, setCurrentUser  } = userContext;


 
  
   
 
  return (

    <div className='font-mono bg-gray-900 text-gray-100 min-h-screen '>
      
        <Routes>

               <Route index element={<Homepage />} />
              <Route path="/Profile/:username" element={<ProfilePage />} />
              <Route path="/Login" element={<LoginPage />} />   
              
             
              
             
        </Routes>
        
        </div>
    
  )
}
