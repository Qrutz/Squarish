import React, {useEffect, useState} from 'react'
import axios from 'axios';
import PostCard from '../Feed/postCard/PostCard';
import {FaRegUser} from 'react-icons/fa';

export default function UserCard(props) {
    const [posts, setPosts] = useState([])
    


    useEffect(() => {
        console.log("usercard trig")
        async function fetchUserPosts() {
            const username = window.location.pathname.split('/')[2];
            try {
                const res = await axios.get(`http://localhost:5000/api/posts/getUserPosts/${username}`);
                setPosts(res.data);
            }
            catch (err) {
                console.log("User doesnt exist !",err);
            }
        }
        fetchUserPosts();
    }, []);

    function renderPosts(){
        if (posts.length > 0) {
            return posts.map(post => {
                return <PostCard id={post._id} key={post._id} profilePicture={FaRegUser} name={post.createdBy} date={post.createdAt} text={post.content} comments={post.comments} likes={post.likes} shares={post.Shares} saved={post.Saved} />
            })

            }
            
    
    }

    function handleFollow() {
        const username = window.location.pathname.split('/')[2];
        setIsFollowing(true);
        axios.put(`http://localhost:5000/api/users/follow/${username}`, {
            
            }, 
            {headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }})
            .then(res => {
                console.log(res.data);
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
            
    }
    function handleUnfollow() {
        const username = window.location.pathname.split('/')[2];
        setIsFollowing(false);
        axios.put(`http://localhost:5000/api/users/unfollow/${username}`, {
    }, {headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }})
    .then(res => {
        console.log(res.data);
    }
    )
    .catch(err => {
        console.log(err);
    }
    )
    }


    
     
    const [isFollowing, setIsFollowing] = useState(false);


   

    const showButton = () => {
        if (isFollowing) {
            return <button className='text-sm md:text-lg mt-4 mr-6 w-16 md:w-24 rounded-3xl h-12 bg-stone-100 text-gray-900 hover:bg-stone-200' onClick={handleUnfollow}>Unfollow</button>
        }
        else {
            return <button className='text-sm md:text-lg mt-4 mr-6 w-16 md:w-24 rounded-3xl h-12 bg-stone-100 text-gray-900 hover:bg-stone-200' onClick={handleFollow}>Follow</button>
        }
    }
    
    
  return (
    <div className='border-2 border-gray-800 rounded-lg md:w-[34rem] mt-2 '>
    <div className='p-4'> 
    <div className='flex justify-between'>
    <img className=' w-28 rounded-full' src={props.profilePicture} alt="aa" />
    {showButton()}
 </div>
 <h2 className='text-2xl mt-5'>{props.name}</h2>
 <p className=' text-slate-400'>@{props.username}</p>
    <div className='flex'>
   <p className='my-5 text-lg'>{props.bio}</p> 
    </div>
 <div className='flex'>
      <p className='leading-tight'> <strong>{props.following}  </strong>following</p> 
      <p className='ml-5 leading-tight'> <strong>{props.followers}</strong> followers </p>
 </div>
 </div>
 <div className='flex justify-around mt-6 text-lg'>
                <p className='cursor-pointer border-b-4  border-blue-800'>Posts</p>
                <p>Comments</p>
                <p>Media</p>
                <p>Likes</p>
            </div>
            <div className='border-t-2 border-gray-700 mt-3'>
                {renderPosts()}
            </div>

 </div>
  )
}
