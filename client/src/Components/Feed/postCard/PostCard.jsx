import React, {useContext} from 'react'
import {GoComment} from 'react-icons/go'
import {BsHeartFill} from 'react-icons/bs'
import {BsFillShareFill} from 'react-icons/bs'
import {AiOutlineContainer} from 'react-icons/ai'
import CommentBar from './commentBar'
import {LikePost} from '../../../hooks/requests'
import {UserContext} from '../../../context/userContext'
import {GiHamburgerMenu} from 'react-icons/gi'
import CommentCard from './commentCard'
import { useEffect } from 'react'
import axios from 'axios'

export default function PostCard(props) {
    const [likes, setLikes] = React.useState(props.likes);
    const [comments, setComments] = React.useState([]);

    const {CurrentUser} = useContext(UserContext);


   
   
    useEffect(()  =>  {
        async function getComments() {
            const res = await axios.get(`http://localhost:5000/api/posts/getAllCommentsUnderPost/${props.id}
            `);
            setComments(res.data);
        }
        getComments();
    }, []);

  
  



    
    function handleLike() {
      const postt= String(props.id);
      const user = String(CurrentUser.username);
     
      try {
        
        LikePost(postt, user);
        setLikes(likes + 1); 
        console.log("SuccessFULLY LIKED");
      }
      catch(err) {
        console.log(err);
      }
    }


    async function getCommentsForPost(id) {
      //filter comments by post id
      const filteredComments = comments.filter(comment => comment.Post_ID === id);
      console.log(filteredComments);
    }

      


   

      



  return (
    <div className={`flex flex-col border-2 border-gray-700 rounded-lg mt-4  `}>
         <div className='flex items-center '> 
         <props.profilePicture className='md:text-3xl mr-4 ml-4  ' />
            <div className='flex flex-col text-lg leading-relaxed'>
            <h1 className='font-bold text-2xl mr-5 mt-2'>{props.name}</h1>
            <p className='text-sm mb-2'>{props.date}</p>
            </div>
            <div className='ml-60 inline-block md:block '>
            <GiHamburgerMenu className='text-gray-500 text-lg mr-4  cursor-pointer ' />
            </div>
            </div>
            
            <div className='ml-3 my-2 '> 
            <p className='text-lg md:text-3xl mb-2 inline-block'>{props.text}</p>
            </div>
          
           

            <div className='justify-evenly my-4 border-b-2 border-gray-800 inline-block  md:flex text-xs md:text  '>
             
                <div className='flex md:mb-4' > 
                <GoComment className='text-lg md:text-3xl hover:text-2xl md:hover:text-4xl mr-4 ml-4  cursor-pointer ' onClick={() => getCommentsForPost(props.id)} />
                <p className='-sm mb-2'>{props.comments} Comments</p>
                </div>
                <div className='flex'> 
                <BsHeartFill className='text-lg md:text-3xl hover:text-2xl md:hover:text-4xl mr-4 ml-4  cursor-pointer  '   onClick={handleLike} />
                <p className=' mb-2'>{likes} Likes</p>
                </div>
                <div className='flex'> 
                <BsFillShareFill className='text-lg md:text-3xl hover:text-2xl md:hover:text-4xl mr-4 ml-4  cursor-pointer '/>
                <p className=' mb-2'>{props.shares} Share</p>
                </div>
                <div className='flex mb-2'> 
                <AiOutlineContainer className='text-lg md:text-3xl hover:text-2xl md:hover:text-4xl mr-4 ml-4  cursor-pointer ' />
                <p className=' mb-2 mr-4'>{props.saved} Saved</p>
                </div>
                </div>
              

          <div className='md:flex w-full mb-3 items-center inline-block '>
            <props.profilePicture className='hidden md:block md:text-3xl mr-4 ml-4  ' />
            <CommentBar id={props.id} />
            

          </div>
        
          {comments.map(comment => comment.Post_ID === props.id ? <CommentCard createdBy={comment.createdBy} createdAt={comment.createdAt} content={comment.content} /> : null)}



        </div>
  )
}
