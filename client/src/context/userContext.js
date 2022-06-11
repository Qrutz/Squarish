import React, { createContext, useState} from 'react';
import { useEffect } from 'react';
import {getTestUser} from '../hooks/requests';
import {getPostsByUser} from '../hooks/requests';


export const UserContext = createContext({
    CurrentUser: {},
    setCurrentUser: () => {},
});


export const UserProvider = ({ children }) => {
    const [CurrentUser, setCurrentUser] = useState({});
    const [Following, setFollowing] = useState([]);
    const [timeLine, setTimeLine] = useState([]);
    
    


    useEffect(() => {
        getTestUser()
            .then(user => {
                setCurrentUser(user);
                setFollowing(user.following);
            }
            )
            .catch(error => {
                console.log(error);
            }
            );
    }
    , []);



    return (
        <UserContext.Provider value={{ CurrentUser, setCurrentUser, Following }}>
            {children}
        </UserContext.Provider>
    );
}
