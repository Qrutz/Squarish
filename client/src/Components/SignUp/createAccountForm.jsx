import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function CreateAccountForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
      e.preventDefault()
      await axios.post('http://localhost:5000/api/users/register', {
        name: name,
        email: email,
        username: username,
        password: password
      })
      .then(res => {
          axios.post('http://localhost:5000/api/users/login', {
          username: username,
          password: password
          })
          .then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('username', username)
            window.location.href = '/'
          }
          )

        
      }
      )
      .catch(err => {
        console.log(err)
      }
      )
    }



  return (
    <div className='flex flex-col  container mx-auto w-[25rem] mt-[10rem]  '>
      <h2 className='text-3xl mb-2'>Create your account</h2>
      <p className=' opacity-70'>Lorem ipsum dolor si</p>

      <form onSubmit={handleSubmit}>
      <div className='hidden md:flex rounded-full bg-gray-800 mt-4  items-center border border-transparent transition   text-gray-500'>
        <input className='border-2 border-gray-700 rounded-lg bg-transparent w-full focus:outline-none px-4 py-2 text-gray-100' value={name} onChange={(e) => setName(e.target.value)}  type="text" placeholder="name" required/>
        </div>
        <div className='hidden md:flex rounded-full bg-gray-800 mt-4  items-center border border-transparent transition   text-gray-500'>
        <input className='border-2 border-gray-700 rounded-lg bg-transparent w-full focus:outline-none px-4 py-2 text-gray-100 'value={email} onChange={(e) => setEmail(e.target.value)} type="email"  placeholder="email" required/>
        </div>
        <div className='hidden md:flex rounded-full bg-gray-800 mt-4  items-center border border-transparent transition   text-gray-500'>
        <input className='border-2 border-gray-700 rounded-lg bg-transparent w-full focus:outline-none px-4 py-2 text-gray-100 'value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" required/>
        </div>
        <div className='hidden md:flex rounded-full bg-gray-800 mt-4  items-center border border-transparent transition   text-gray-500'>
        <input className='border-2 border-gray-700 rounded-lg bg-transparent w-full focus:outline-none px-4 py-2 text-gray-100 'value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" requried/>
        </div>
        <div className='flex items-center space-x-2 mt-4'>
          <input className=' text-3xl' type="checkbox"  required/>
          <p className='' >I agree to the Terms & Conditions</p>
        </div>
        <button className=' text-gray-800 bg-gray-200 w-full h-[2.8rem] self-center mt-5 rounded-xl text-xl  hover:bg-gray-300' type="submit">Create my account</button>
        </form>
        <div className='flex items-center justify-center mt-6'>
        <p className=' opacity-75'>Already have an account?</p>
        <Link className='text-2xl ml-3' to='/login'>Sign in</Link>
        </div>
    </div>
  )
}
