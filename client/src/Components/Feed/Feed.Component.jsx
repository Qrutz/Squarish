import React, {useContext, useEffect} from 'react';
import PostCard from "./postCard/PostCard"
import {FaRegUser} from 'react-icons/fa'
import PostTab from './PostTab/PostTab'
import { UserContext } from '../../context/userContext';


export default function Feed() {
    

   
    






  return (
    <div className='flex flex-col mt-2'>
        <PostTab />
        <PostCard profilePicture={FaRegUser} name="Hazmat" date="12 April at 13.23 PM" 
        text="Today i went fishing" comments="25" likes="120k" shares="231" saved="12" />
        <PostCard profilePicture={FaRegUser} name="Jesust" date="24 April at 13.23 PM" 
        text="Test test test test" comments="11" likes="13" shares="6" saved="2" />
    </div>
  )
}
