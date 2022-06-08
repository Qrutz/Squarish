import React from 'react'
import {GoComment} from 'react-icons/go'
import {BsHeartFill} from 'react-icons/bs'
import {BsFillShareFill} from 'react-icons/bs'
import {AiOutlineContainer} from 'react-icons/ai'
import CommentBar from './commentBar'

export default function PostCard(props) {
  return (
    <div className='flex flex-col border-2 border-gray-700 rounded-lg mt-4'>
         <div className='flex items-center'> 
         <props.profilePicture className='text-3xl mr-4 ml-4 ' />
            <div className='flex flex-col text-lg leading-relaxed'>
            <h1 className='font-bold text-2xl mr-5 mt-2'>{props.name}</h1>
            <p className='text-sm mb-2'>{props.date}</p>
            </div>
            </div>
            
            <div className='ml-3 my-2'> 
            <p className='text-3xl mb-2 '>{props.text}</p>
            </div>
          
           

            <div className='flex justify-evenly my-4 border-b-2 border-gray-800 '>
                <div className='flex mb-4' > 
                <GoComment className='text-3xl mr-4 ml-4 ' />
                <p className='text-sm mb-2'>{props.comments} Comments</p>
                </div>
                <div className='flex'> 
                <BsHeartFill className='text-3xl mr-4 ml-4 ' />
                <p className='text-sm mb-2'>{props.likes} Likes</p>
                </div>
                <div className='flex'> 
                <BsFillShareFill className='text-3xl mr-4 ml-4 ' />
                <p className='text-sm mb-2'>{props.shares} Share</p>
                </div>
                <div className='flex'> 
                <AiOutlineContainer className='text-3xl mr-4 ml-4 ' />
                <p className='text-sm mb-2 mr-4'>{props.saved} Saved</p>
                </div>
                </div>

          <div className='flex w-full mb-3 items-center '>
            <props.profilePicture className='text-3xl mr-4 ml-4  ' />
            <CommentBar />

          </div>

        </div>
  )
}
