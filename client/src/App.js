import React, { useContext } from 'react';
import { UserContext } from './context/userContext';
import Homepage from './pages/homepage';
import { Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import "../src/index.css";
import { useEffect } from 'react';
import CreateAccountPage from './pages/createAccountPage';



    

export default function App() {
  const userContext = useContext(UserContext);

  const { CurrentUser, setCurrentUser  } = userContext;


 
  
   
 
  return (

    
      
        <Routes>

               <Route index element={<Homepage />} />
              <Route path="/Profile/:username" element={<ProfilePage />} />
              <Route path="/Login" element={<LoginPage />} />   
              <Route path="/Signup" element={<CreateAccountPage />} />
              
             
              
             
        </Routes>
        
      
    
  )
}
