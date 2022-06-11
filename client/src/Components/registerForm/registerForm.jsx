import React, {useState, useContext} from 'react';
import {UserContext} from '../../context/userContext';
import axios from 'axios';


export default function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [uname, setUname] = useState('');
    const [pword, setPword] = useState('');

    const userContext = useContext(UserContext);
    const { setCurrentUser } = userContext;

    async function handleRegister(e) {
        e.preventDefault();
        const user = {
            name: name,
            email: email,
            username: uname,
            password: pword
        }
        try {
            const res = await axios.post('http://localhost:5000/api/users/register', user);
            if (res.statusText === 'Created') {
                await axios.post('http://localhost:5000/api/users/login', {username: uname, password: pword});
                const user = await axios.get(`http://localhost:5000/api/users/${uname}`);
                setCurrentUser(user.data);
                window.location.href = '/';
            }
            

        }
        catch (err) {
            alert(err);
        }
    }


        

  return (
        <form className='mt-40' onSubmit={handleRegister}>
            <div className='flex flex-col text-gray-800'>
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}  />
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="username" value={uname} onChange={(e) => setUname(e.target.value)}/>
            <input type="password" placeholder="password" value={pword} onChange={(e) => setPword(e.target.value)}  />
            <button className=' bg-red-500' type="submit">Sign up</button>
            </div>
        </form>
  )
}
