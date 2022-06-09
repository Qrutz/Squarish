import React, { createContext, useState} from 'react';
import { useEffect } from 'react';
import getTestUser from '../hooks/requests';


export const UserContext = createContext({
    CurrentUser: null,
    setCurrentUser: () => [],
});


export const UserProvider = ({ children }) => {
    const [CurrentUser, setCurrentUser] = useState(null);
    const [Following, setFollowing] = useState([]);


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
