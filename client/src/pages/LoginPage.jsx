import React from 'react';
import {Link} from 'react-router-dom';
import SquarishBanner from '../Components/Navbar/SquarishBanner';
import SignInForm from '../Components/SignIn/SignInForm';

export default function LoginPage() {
    

  return (
    <div className='flex flex-col justify-center items-center  font-mono bg-gray-900 text-gray-100  '>
    <div className='self-center absolute top-[7rem] '>
    <SquarishBanner />
    <SignInForm />
    <div className='flex mt-3 items-center justify-center'>
    <p className=' font-extralight opacity-75'>Don't have an account?</p>
    <Link to='/Signup' className='text-xl ml-3'>Sign Up</Link> 
    </div>
    </div>
    
    
   
    </div>
   

  )
}
