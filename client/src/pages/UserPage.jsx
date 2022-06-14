import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios';
import Navbar from '../Components/Navbar/Navbar.Component';
import {UserContext} from '../context/userContext';
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar.Component';
import UserCard from '../Components/ProfileCard/userCard';
import RightSideBar from '../Components/RightSideBarComponent/RightSideBar.Component';
import { useParams } from 'react-router';

export default function UserPage() {
    const [user, setUser] = useState({});
    // const [loaded, setLoaded] = useState(false);
    const [following, setFollowing] = useState(false);
    

    const userContext = useContext(UserContext)
    const {CurrentUser} = userContext

    const uname = useParams()
    
   



    useEffect(() => {
       
        
        const fetchUser = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/users/profile/${uname.username}`);
                setUser(res.data);
                // setLoaded(true);
                res.data.followers.includes(localStorage.getItem("username")) ? setFollowing(true) : setFollowing(false);
            
                
            
        }
        catch (err) {   
            console.log("User doesnt exist !",err);
            // setLoaded(false);
        }
        }
        fetchUser();
    }, [uname]);


    // const following = (user.following) === undefined ? "" : (user.following).length;
    // const followers = (user.followers) === undefined ? "" : (user.followers).length;

  return (
<>
    <div className='text-gray-200 font-mono     '>
       
        <Navbar />
        <div className='flex justify-center p-2'>
        <LeftSideBar name={CurrentUser.name} username={CurrentUser.username} profilePicture={CurrentUser.profilePicture} />
        <UserCard  followers={2} following={3} name={user.name} username={user.username} profilePicture={user.profilePicture} bio={user.bio} />
        <RightSideBar />
 </div>
    </div>
    
    </>
  )
}
