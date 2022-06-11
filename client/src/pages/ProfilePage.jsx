import React, {useContext, useState} from 'react';
import {UserContext} from '../context/userContext';
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar.Component';
import PostCard from '../Components/Feed/postCard/PostCard';
import axios from 'axios';
import { useEffect } from 'react';
import {FaRegUser} from 'react-icons/fa';
import Navbar from '../Components/Navbar/Navbar.Component';


export default function ProfilePage() {
   
  

   const userContext = useContext(UserContext);

   const { CurrentUser } = userContext;


   //  const profilePicToString = CurrentUser ? String(CurrentUser.profilePicture) : '';
   const [user, setUser] = useState({});
   const [posts, setPosts] = useState({});

    useEffect(() => {
      if (CurrentUser.username !== undefined) {
         const fetchUser = async () => {
            
               const res = await axios.get(`http://localhost:5000/api/users/${CurrentUser.username}`);
               setUser(res.data);
        }
         
         fetchUser();
      }
      }, [CurrentUser.username]);

      useEffect(() => {
         if (CurrentUser.username !== undefined) {
            const fetchPosts = async () => {
               const res = await axios.get(`http://localhost:5000/api/posts/getAllPostByUser/${CurrentUser.username}`);
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
      <div>
         <Navbar />
    <div className='flex justify-center '>
         { <LeftSideBar name={user.name} username={user.username}/>}
      
           <div className='rounded-lg flex flex-col p-4 mt-3 border-2 border-gray-700 '> 
           <div className='flex justify-between'>
              <img className=' w-28 rounded-full' src={user.profilePicture} alt="aa" />
              <button className='text-sm md:text-lg mt-4 mr-6 w-16 md:w-24 rounded-3xl h-12 bg-stone-100 text-gray-900 hover:bg-stone-200'>Follow</button>
           </div>
           <h2 className='text-2xl mt-5'>{user.name}</h2>
           <p className=' text-slate-400'>@{user.name}</p>
              <p className='my-5 text-lg'>{user.bio}</p>
           <div className='flex'>
                <p> </p> 
                <p className='ml-5'> followers </p>
           </div>
           
            <div className='flex justify-around mt-6 text-lg'>
                <p className='cursor-pointer border-b-4  border-blue-800'>Posts</p>
                <p>Comments</p>
                <p>Media</p>
                <p>Likes</p>
            </div>
            <div className='border-t-2 border-gray-700 mt-3'>
                
            </div>

            {renderPosts()}
         {console.log(posts[0])}





           </div> 
           

        </div>
      </div>
        
    
  )
}
