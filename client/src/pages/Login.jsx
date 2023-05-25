import React from 'react'
import login from '../assets/login.png'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
      <div className='bg-indigo-600 flex h-[40rem] justify-center items-center w-[80rem] mt-10 shadow-lg'>
      <img src={login} alt="Login" className='h-[30rem]'/>
      <div className='bg-white h-[30rem] my-20 ml-32 w-[30rem] rounded-lg shadow-lg'>
        <form className='flex flex-col gap-6 m-20 text-2xl'>
          <label className='mr-auto'>Email Address</label>
          <input
            type="email"
            name="email"
            required
            className='border-b-2 border-black outline-none'
          />
          <label className='mr-auto'>Password</label>
          <input
            type="password"
            name="password"
            required
            className='border-b-2 border-black outline-none'
          />
          <button type="submit" className='bg-indigo-600 text-white w-[10rem] mx-20 mt-4 rounded-lg py-4 hover:bg-indigo-500'>Login</button>
          <div className='text-xl mt-4 flex'>Don't have an account? <Link to='/register' className='ml-2 text-blue-600 underline cursor-pointer'>Sign-Up</Link>
          </div>
        </form>
      </div>
      </div>
  )
}

export default Login