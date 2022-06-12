import React from 'react';
import {Link} from 'react-router-dom';

export default function SignUp() {

    function handleSignUp() {
       
        console.log("sign up");
    } 



  return (
    
           
           <Link to='/Signup' className='text-xl ml-3'>Sign Up</Link> 
        
  )
}
