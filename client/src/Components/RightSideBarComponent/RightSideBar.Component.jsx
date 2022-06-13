import React, {useContext, useEffect} from 'react'
import FriendCard from './FriendCard/FriendCard';
import {FaRegUser} from 'react-icons/fa';
import { UserContext } from '../../context/userContext';
import axios from 'axios';

export default function RightSideBar() {
  const {CurrentUser} = useContext(UserContext);
  const [friends, setFriends] = React.useState([]);
  const [friendArrCopy, setFriendArrCopy] = React.useState(friends);



  useEffect(() => {
    const fetchFriends = async () => {
      const res = await axios.get(`http://localhost:5000/api/users/following/people`,
        {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
      setFriendArrCopy(res.data);
    }
    fetchFriends();
  }, [friends]);


 
  

  return (
    <div className='md:flex flex-col ml-4 text-center mt-4 hidden'>
      <h2 className='text-3xl leading-9'>Following</h2>
      {/* <FriendCard profilePicture={FaRegUser} name={Following[0]} />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" /> */}
      
        {/* <FriendCard  profilePicture={FaRegUser} name={"s"}/>
        <FriendCard  profilePicture={FaRegUser}  /> */}
        {friendArrCopy.map(friend => {
          return <FriendCard key={friend}  profilePicture={FaRegUser} username={friend} name={friend} />
        }
        )}

    </div>
  )
}
