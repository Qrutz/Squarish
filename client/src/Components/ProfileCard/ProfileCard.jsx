import React, {useContext, useState} from 'react'
import {UserContext} from '../../context/userContext'
import axios from 'axios'
import { useEffect } from 'react'
import {FaRegEdit} from 'react-icons/fa'
import {MdCancel} from 'react-icons/md'
import {GiConfirmed} from 'react-icons/gi'


export default function ProfileCard() {
    const userContext = useContext(UserContext)
    const {CurrentUser} = userContext


    const [toggle, setToggle] = useState(false)
    const [bio, setBio] = useState(CurrentUser.bio)

    function handleSubmit(e) {
        e.preventDefault()
        const config = {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
        const body = {
            bio: bio,
            username: CurrentUser.username
        }
        axios.put(`http://localhost:5000/api/users/editUser`, body, config)
            .then(res => {
                console.log(res.data)
                setToggle(false)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }
    function handleCancel() {
        setToggle(false)
        setBio(CurrentUser.bio)
    }



    useEffect(() => {
        if (CurrentUser.username !== undefined) {
            setBio(CurrentUser.bio)
        }
    }
        , [CurrentUser.username])

    // const profilepic = (CurrentUser.profilePicture === undefined) ? 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png' : CurrentUser.profilePicture


  return (
    <div>
    <div className='flex justify-between'>
    <img className=' w-28 rounded-full' src={CurrentUser.profilePicture} alt="aa" />
    <button className='text-sm md:text-lg mt-4 mr-6 w-16 md:w-24 rounded-3xl h-12 bg-stone-100 text-gray-900 hover:bg-stone-200'>Follow</button>
 </div>
 <h2 className='text-2xl mt-5'>{CurrentUser.name}</h2>
 <p className=' text-slate-400'>@{CurrentUser.name}</p>
    <div className='flex'>
    {!toggle ? <p className='my-5 text-lg'>{bio}</p> : <textarea onChange={(e) => setBio(e.target.value)} className='resize rounded-md text-gray-800 my-2' value={bio} ></textarea>}
    
   
    {!toggle ? <FaRegEdit onClick={() => setToggle(!toggle)} className='ml-3 self-center cursor-pointer'>Edit bio</FaRegEdit>  : <div className='self-center flex space-x-2 text-2xl'> <GiConfirmed onClick={handleSubmit} className='ml-3 cursor-pointer '>Submit changes</GiConfirmed> <MdCancel className='cursor-pointer' onClick={handleCancel}>Cancel</MdCancel> </div>}
    </div>
 <div className='flex'>
      <p className='leading-tight'> <strong>{(CurrentUser.following).length}  </strong>following</p> 
      <p className='ml-5 leading-tight'> <strong>{(CurrentUser.followers).length}</strong> followers </p>
 </div>
 </div>
  )
}
