import React, {useContext, useState} from 'react';
import {UserContext} from '../context/userContext';
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar.Component';
import PostCard from '../Components/Feed/postCard/PostCard';
import axios from 'axios';
import { useEffect } from 'react';
import {FaRegUser} from 'react-icons/fa';
import Navbar from '../Components/Navbar/Navbar.Component';
import ProfileCard from '../Components/ProfileCard/ProfileCard';
import RightSideBar from '../Components/RightSideBarComponent/RightSideBar.Component';


export default function ProfilePage() {
   
  

   const userContext = useContext(UserContext);

   const { CurrentUser } = userContext;


   //  const profilePicToString = CurrentUser ? String(CurrentUser.profilePicture) : '';
   const [user, setUser] = useState({});
   const [posts, setPosts] = useState({});

   const config = {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
  }



      useEffect(() => {
         if (CurrentUser.username !== undefined) {
            const fetchPosts = async () => {
               const res = await axios.get(`http://localhost:5000/api/posts/getAllPostByUser`, config);
               setPosts(res.data);
            }
            fetchPosts();
         }
      }, [CurrentUser.username]);

      


   function renderPosts() {
      if (posts.length > 0) {
         return posts.map((post) => {
            return (
             <div className='w-[34rem]'>
            <PostCard id={post._id} key={post._id} profilePicture={FaRegUser} name={post.createdBy} date={post.createdAt} text={post.content} comments={post.comments} likes={post.likes} shares={post.Shares} saved={post.Saved} />
            </div>  
            )
         })
      }
   }
            
  
  return (
   <div className='font-mono bg-gray-900 text-gray-100 min-h-screen '>
         <Navbar />
    <div className='flex justify-center '>
         { <LeftSideBar name={CurrentUser.name} username={CurrentUser.username} profilePicture={CurrentUser.profilePicture}/>}
      
           <div className='rounded-lg flex flex-col p-4 mt-3 border-2 border-gray-700 '> 
           <div>
            <ProfileCard />
           </div>
           
            <div className='flex justify-around mt-6 text-lg'>
                <p className='cursor-pointer border-b-4  border-blue-800'>Posts</p>
                <p>Comments</p>
                <p>Media</p>
                <p>Likes</p>
            </div>
            <div className='border-t-2 border-gray-700 mt-3'>
                
            </div>
            <div> 

            {renderPosts()}
            </div>
      





           </div> 
           
           <RightSideBar />
        </div>
       
      </div>
        
    
  )
}
