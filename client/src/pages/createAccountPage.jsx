import React from 'react'

import SquarishBanner from '../Components/Navbar/SquarishBanner'
import { GrSquare } from 'react-icons/gr'
import CreateAccountForm from '../Components/SignUp/createAccountForm'

export default function CreateAccountPage() {




  return (
    <div className='font-mono bg-gray-900 text-gray-100'>
       <div className='flex items-center space-x-2 ml-4 p-4  mb-6 cursor-pointer'>
    <GrSquare className='h-14 w-14'/>
    <h1 className='text-3xl '>Squarish</h1>
    </div>
    <CreateAccountForm />
    



    </div>
  )
}
