import React, { createContext, useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export const UserContext = createContext({
    CurrentUser: {},
    setCurrentUser: () => {},
});


export const UserProvider = ({ children }) => {
    const [CurrentUser, setCurrentUser] = useState({});
    
   

    useEffect(() => {
        const config = {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
        if (localStorage.getItem('token')) {
        axios.get(`http://localhost:5000/api/users/${localStorage.getItem('username')}`, config)
        .then(res => {
            setCurrentUser(res.data);
        }
        ).catch(err => {
            console.log(err);
        }
        );
        }
    }, []);
            
    
  


    
 



    return (
        <UserContext.Provider value={{ CurrentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    );
}
