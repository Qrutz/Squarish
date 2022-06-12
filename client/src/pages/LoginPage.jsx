import React, {useContext, useState} from 'react';
import {UserContext} from '../context/userContext';
import axios from 'axios';
import {GrSquare} from 'react-icons/gr';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userContext = useContext(UserContext);
    const { setCurrentUser } = userContext;

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/login', {username, password});
            if (res.statusText === 'OK') {
                console.log("success");
                // put token in local storage
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username', username);
                window.location.href = '/';
            }
            
        }
        catch (err) {
            alert(err);
        }


        
    }

  return (
    <div className='flex'>

    <div className='w-[68%] flex flex-col'>
        <div className='flex items-center space-x-2 ml-4 p-4'>
            <GrSquare className='h-14 w-14'/>
            <h1 className='text-3xl '>Squarish</h1>
        </div>
        <div className='text-center self-center pt-[12rem]'>
        <div className='text-center space-y-4 '> 
            <h2 className='text-5xl'>Login to Your Account</h2>
             </div>
             <div className='w-[25rem]   mt-5 ml-[70px] '> 
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col text-gray-800 border-t-2 border-gray-800'>
            <div className='hidden md:flex rounded-full bg-gray-800 mt-4  items-center border border-transparent transition focus-within:border-blue-400 focus-within:text-blue-400 text-gray-500'> 
            <input className='rounded-lg bg-transparent w-full focus:outline-none px-4 py-2 text-gray-100' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='hidden md:flex rounded-full bg-gray-800 mt-4  items-center border border-transparent transition focus-within:border-blue-400 focus-within:text-blue-400 text-gray-500'>
            <input className='rounded-lg bg-transparent w-full focus:outline-none px-4 py-2 text-gray-100 ' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className=' bg-gray-200 w-[10rem] self-center mt-5 rounded-3xl text-xl hover:bg-gray-300' type="submit">SIGN IN</button>
            </div>
        </form> 
        </div>
    </div>
    </div>

    <div className=' bg w-[32%]  '>
        <div className='flex flex-col items-center pt-[17rem] '>
            <h2 className='text-5xl'>New Here?</h2>
            <p>Sign up and discover a great amount of new opportunities!</p>
            <button className=' bg-gray-200 w-[10rem] self-center mt-5 rounded-3xl text-xl hover:bg-gray-300' type="submit">SIGN IN</button>
        </div>
    </div>

    </div>

  )
}
