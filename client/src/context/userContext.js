import React, { createContext, useState} from 'react';
import { useEffect } from 'react';
import {getTestUser} from '../hooks/requests';
import {getPostsByUser} from '../hooks/requests';


export const UserContext = createContext({
    CurrentUser: null,
    setCurrentUser: () => [],
});


export const UserProvider = ({ children }) => {
    const [CurrentUser, setCurrentUser] = useState(null);
    const [Following, setFollowing] = useState([]);
    const [posts, setPosts] = useState([]);
    
    


    useEffect(() => {
        getTestUser()
            .then(user => {
                setCurrentUser(user);
                setFollowing(user.following);
                setPosts(getPostsByUser(user.username));
            }
            )
            .catch(error => {
                console.log(error);
            }
            );
    }
    , []);



    return (
        <UserContext.Provider value={{ CurrentUser, setCurrentUser, Following, posts }}>
            {children}
        </UserContext.Provider>
    );
}
