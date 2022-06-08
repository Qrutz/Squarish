import React from 'react'
import PostCard from "./postCard/PostCard"
import {FaRegUser} from 'react-icons/fa'

export default function Feed() {
  return (
    <div className='flex flex-col'>
        <h2>Post Something</h2>
       

        <PostCard profilePicture={FaRegUser} name="John Doe" date="12 April at 13.23 PM" 
        text="Today i went fishing" comments="25" likes="120k" shares="231" saved="12" />
    
    <PostCard profilePicture={FaRegUser} name="John Doe" date="12 April at 13.23 PM" 
        text="Today i went fishing" comments="25" likes="120k" shares="231" saved="12" />



    </div>
  )
}
