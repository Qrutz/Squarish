import React from 'react'; 
import { useEffect } from 'react';
import {FaRegUser} from 'react-icons/fa';
import axios from 'axios';

export default function CommentCard(props) {



  return (
    <div className='border border-gray-800'>
            <div className='flex'>
              <FaRegUser className='hidden md:block md:text-3xl mr-4 ml-4 self-center  ' />
              <div className='flex flex-col text-lg leading-relaxed'>
                <h1 className=' text-lg mr-5 mt-2'>{props.createdBy}</h1>
                <p className='text-sm mb-2'>{props.createdAt}</p>
                <p className='text-sm mb-2'>{props.content} </p>
                </div>
            </div>
          </div>
  )
}
