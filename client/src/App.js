import React, { useContext } from 'react';
import { UserContext } from './context/userContext';
import Navbar from './Components/Navbar/Navbar.Component';
import Homepage from './pages/homepage';
import { Routes, Route, Link } from "react-router-dom";
import ProfilePage from './pages/ProfilePage';
import "../src/index.css";



    

export default function App() {
  const userContext = useContext(UserContext);

  const { CurrentUser } = userContext;


   
 
  return (
    <div className="bg-gray-900">
    <div className='container mx-auto font-mono bg-gray-900 text-gray-100 min-h-screen '>
        <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Homepage />} />
              <Route path="/Profile" element={<ProfilePage />} />
            </Route>  
            {/* </Route> */}
       
        </Routes>
        </div>
    </div>
  )
}
