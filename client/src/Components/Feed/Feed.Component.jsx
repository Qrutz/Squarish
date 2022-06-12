import React, {useContext, useEffect} from 'react';
import PostCard from "./postCard/PostCard"
import {FaRegUser} from 'react-icons/fa'
import PostTab from './PostTab/PostTab'
import { getTimeLine } from '../../hooks/requests';
import {createPost} from '../../hooks/requests';
import { SearchContext } from '../../context/searchContext';
import axios from 'axios';


export default function Feed() {
  const [posts, setPosts] = React.useState([]);
  const {Search, setSearch} = useContext(SearchContext);
  const [postArrCopy, setPostArrCopy] = React.useState(posts);
  
    
  const config = {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
}
   
    
    useEffect(()  =>  {
       
        axios.get(`http://localhost:5000/api/posts/userTimeline/`, config)
        .then(res => {
            setPostArrCopy(res.data);

        }
        )
        .catch(err => {
            console.log(err);
        }
        )
    }, [posts]);




    function HandleSubmit(e) {
      e.preventDefault();
      const val = Search;
      try {
        axios.post(`http://localhost:5000/api/posts/addPost/`,{
          content: val
        }, config)
        setPosts([...posts, val])
      
      }
      catch(err) {
        console.log(err);
      }
      setSearch('');
    }


   


  return (
    <div className='flex flex-col mt-2  md:w-[34rem] '>
       
        <PostTab handleSubmit={HandleSubmit} />
        {postArrCopy.map(post => 
        
        <PostCard id={post._id} key={post._id} profilePicture={FaRegUser} name={post.createdBy} date={post.createdAt}
        text={post.content} comments={post.comments} likes={post.likes} shares={post.Shares} saved={post.Saved} 
        />)}


        

    </div>
  )
}
