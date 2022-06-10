import React, {useContext, useEffect} from 'react';
import PostCard from "./postCard/PostCard"
import {FaRegUser} from 'react-icons/fa'
import PostTab from './PostTab/PostTab'
import { UserContext } from '../../context/userContext';
import { getTimeLine } from '../../hooks/requests';


export default function Feed() {
  const [posts, setPosts] = React.useState([]);
    

   
    
    useEffect(() => {
        getTimeLine().then(res => {
            setPosts(res)
        })
    }, [])


   


  return (
    <div className='flex flex-col mt-2'>
       
        <PostTab />
        {posts.map(post => 
        
        <PostCard id={post._id} key={post._id} profilePicture={FaRegUser} name={post.createdBy} date={post.createdAt}
        text={post.content} comments={post.comments} likes={post.likes} shares={post.Shares} saved={post.Saved} 
        />)}


        

    </div>
  )
}
