import React from 'react'
import {GrSquare} from 'react-icons/gr';

export default function SquarishBanner() {
  return (
    <div className='flex items-center space-x-2 ml-4 p-4 justify-center mb-6 cursor-pointer'>
    <GrSquare className='h-14 w-14'/>
    <h1 className='text-3xl '>Squarish</h1>
</div>
  )
}
