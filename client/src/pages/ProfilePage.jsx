import React, {useContext} from 'react';
import {UserContext} from '../context/userContext';
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar.Component';
import PostCard from '../Components/Feed/postCard/PostCard';

export default function ProfilePage() {
    const userContext = useContext(UserContext);

    const { CurrentUser } = userContext;

    const name = CurrentUser ? CurrentUser.name : '';

    const username = CurrentUser ? CurrentUser.username : '';

    const profilePicToString = CurrentUser ? String(CurrentUser.profilePicture) : '';

    

  

  return (
    <div className='flex justify-center'>
        <LeftSideBar name={name} username={username}/>
      
           <div className='rounded-lg flex flex-col p-4 md:w-3/6 w-full  mt-3 border-2 border-gray-700'> 
           <div className='flex justify-between'>
              <img className=' w-28 rounded-full' src={profilePicToString} alt="aa" />
              <button className='text-sm md:text-lg mt-4 mr-6 w-16 md:w-24 rounded-3xl h-12 bg-stone-100 text-gray-900 hover:bg-stone-200'>Follow</button>
           </div>
           <h2 className='text-2xl mt-5'>{name}</h2>
           <p className=' text-slate-400'>@{username}</p>
              <p className='my-5 text-lg'>{CurrentUser ? CurrentUser.bio : ''}</p>
           <div className='flex'>
                <p>{CurrentUser.following.length} following </p> 
                <p className='ml-5'>{CurrentUser.followers.length} followers </p>
           </div>
           
            <div className='flex justify-around mt-6 text-lg'>
                <p className='cursor-pointer border-b-4  border-blue-800'>Posts</p>
                <p>Comments</p>
                <p>Media</p>
                <p>Likes</p>
            </div>
            <div className='border-t-2 border-gray-700 mt-3'>
                
            </div>

            




           </div>
           

        </div>
        
    
  )
}
