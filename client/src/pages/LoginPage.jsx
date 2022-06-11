import React, {useContext, useState} from 'react';
import {UserContext} from '../context/userContext';
import axios from 'axios';

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
                const user = await axios.get(`http://localhost:5000/api/users/${username}`);
                setCurrentUser(user.data);
            }
            
        }
        catch (err) {
            alert(err);
        }


        
    }
        

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col text-gray-800'>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className=' bg-red-500' type="submit">Log in</button>
            </div>
        </form>
    </div>
  )
}
