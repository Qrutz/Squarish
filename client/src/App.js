import React from 'react';
import Homepage from './pages/homepage';
import { Routes, Route } from "react-router-dom";
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import "../src/index.css";
import CreateAccountPage from './pages/createAccountPage';
import UserPage from './pages/UserPage';



    

export default function App() {



    

    


  
   
 
  return (

    
      
        <Routes>
              
              <Route index element={<Homepage />} />
              <Route path="/Profile/:username" element={<ProfilePage />} />
              <Route path="/user/:username" element={<UserPage />} />
              <Route path="/Login" element={<LoginPage />} />   
              <Route path="/Signup" element={<CreateAccountPage />} />
              
             
              
             
        </Routes>
        
      
    
  )
}
