import React, {useContext} from 'react'
import {VscSmiley} from 'react-icons/vsc'
import {FaImage} from 'react-icons/fa';
import {FaRegUser} from 'react-icons/fa';
import { SearchContext } from '../../../context/searchContext';



export default function PostTab(props) {
   const {Search, setSearch} = useContext(SearchContext);
  
   
 
   


  return (
    <form onSubmit={props.handleSubmit} method="POST"> 
    <div className='flex flex-col border-2 border-gray-700 rounded-md p-2'>
        <div className='border-b-2 border-gray-700'> 
        <h2 className='mb-2 ml-2 font-semibold text-xl'>Post something</h2>
        </div>
        <div className='flex items-center'> 
        <FaRegUser className='text-3xl mx-2  ' />

        <div className="mt-2 rounded-full bg-gray-800  flex items-center border border-transparent transition focus-within:border-blue-400 focus-within:text-blue-400 text-gray-500">
        
  
    <input
      className="resize bg-transparent w-96 focus:outline-none px-4 py-2 text-gray-100 "
      placeholder="What's on your mind?" type="text" value={Search}  onChange={(e) => setSearch(e.target.value)}
    />
    <VscSmiley className="text-gray-100  mr-4 hover:text-3xl cursor-pointer" />
    <FaImage className="text-gray-100  mr-4 hover:text-3xl cursor-pointer" />

    
  </div>
  </div>
    </div>
    </form>
  )
}
