import React, {useState} from 'react';
import axios from 'axios';

export default function SignInForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   

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
    <div className='flex flex-col bg-gray-800 bg-opacity-40 rounded-3xl p-[4.5rem]'>
   
    <div className=' space-y-4 border-b-2 border-gray-700   '> 
        <h2 className='text-4xl'>Sign in</h2>
        <p className=' mb-[7px]'>Login to manage your account</p>
         </div>
         <div className='w-[25rem]   mt-3  '> 
    <form onSubmit={handleSubmit}>
        <div className='flex flex-col text-gray-800 '>
        <div className='hidden md:flex rounded-full bg-gray-800 mt-4  items-center border border-transparent transition   text-gray-500'> 
        <input className='border-gray-700 border-2 rounded-lg bg-transparent w-full focus:outline-none px-4 py-2 text-gray-100' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='hidden md:flex rounded-full bg-gray-800 mt-4  items-center border border-transparent transition   text-gray-500'>
        <input className='border-2 border-gray-700 rounded-lg bg-transparent w-full focus:outline-none px-4 py-2 text-gray-100 ' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className=' bg-gray-200 w-full h-[2.8rem] self-center mt-5 rounded-xl text-xl  hover:bg-gray-300' type="submit">SIGN IN</button>
        </div>
    </form> 
    </div>
    

</div>
  )
}
