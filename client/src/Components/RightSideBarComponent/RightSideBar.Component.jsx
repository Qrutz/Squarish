import React, {useContext, useEffect} from 'react'
import FriendCard from './FriendCard/FriendCard';
import {FaRegUser} from 'react-icons/fa';
import { UserContext } from '../../context/userContext';

export default function RightSideBar() {
  const {CurrentUser} = useContext(UserContext);
  const [friends, setFriends] = React.useState([]);
  const [friendArrCopy, setFriendArrCopy] = React.useState(friends);



  useEffect(() => {
    setFriendArrCopy(CurrentUser.friends);



  }
  , [friends]);

  

  return (
    <div className='md:flex flex-col ml-4 text-center mt-4 hidden'>
      <h2 className='text-3xl leading-9'>Following</h2>
      {/* <FriendCard profilePicture={FaRegUser} name={Following[0]} />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" />
      <FriendCard profilePicture={FaRegUser} name="Name Lastname" /> */}
      
        <FriendCard  profilePicture={FaRegUser} name={"s"}/>
        <FriendCard  profilePicture={FaRegUser}  />

    </div>
  )
}
