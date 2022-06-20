import React from 'react';
import {VscSmiley} from 'react-icons/vsc'
import {FaImage} from 'react-icons/fa'
import axios from 'axios';

export default function CommentBar(props) {
    const [comment, setComment] = React.useState('');

    const config = {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
  }

    async function handleSubmit(e) {
        e.preventDefault();
        await axios.post(`http://localhost:5000/api/posts/createComment/`,{    
            content: comment,
            Post_ID: props.id 
        }, config)
        .then(res => {
            console.log(res);
            setComment('');
        }
        )
        .catch(err => {
            console.log(err);
        }
        )
    }




            
            

        
        
  


  return (
    <form onSubmit={handleSubmit}> 
    <div className=" md:mr-3 w-full rounded-full bg-gray-800  flex items-center border border-transparent transition focus-within:border-blue-400 focus-within:text-blue-400 text-gray-500">
    
    <input
      className="bg-transparent w-96 focus:outline-none px-4 py-2 text-gray-100 "
      placeholder="Write your comment" value={comment} onChange={(e) => setComment(e.target.value)}
    />
    <VscSmiley className="hidden md:block text-gray-100 dark:text-gray-100 mr-4 hover:text-3xl cursor-pointer" />
    <FaImage className="hidden md:block text-gray-100 dark:text-gray-100 mr-4 hover:text-3xl cursor-pointer" />
    
  </div>
  </form>
  )
}
