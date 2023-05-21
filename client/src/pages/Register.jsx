import React from 'react'
import register from '../assets/register.webp'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='bg-indigo-600 flex h-[40rem] justify-center items-center w-[80rem] mt-10 shadow-lg'>
            <img src={register} alt="register" className='h-[30rem]' />
            <div className='bg-white h-[30rem] my-20 ml-32 w-[30rem] rounded-lg shadow-lg'>
                <form className='flex flex-col gap-6 mx-20 mt-6 text-xl'>
                    <label className='mr-auto'>First Name</label>
                    <input
                        type="string"
                        name="firstName"
                        required
                        className='border-b-2 border-black outline-none -mt-6 text-[1rem]'
                    />
                    <label className='mr-auto'>Last Name</label>
                    <input
                        type="string"
                        name="lastName"
                        required
                        className='border-b-2 border-black outline-none -mt-6 text-[1rem]'
                    />
                    <label className='mr-auto'>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className='border-b-2 border-black outline-none -mt-6 text-[1rem]'
                    />
                    <label className='mr-auto'>Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        className='border-b-2 border-black outline-none -mt-6 text-[1rem]'
                    />
                    <button type="submit" className='bg-indigo-600 text-white w-[10rem] mx-20 rounded-lg py-4 hover:bg-indigo-500'>Submit</button>
                    <div className='text-xl flex justify-center items-center'>Already a member? <Link to='/login' className='ml-2 text-blue-600 underline cursor-pointer'>Login</Link></div>
                </form>
            </div>
        </div>
    )
}

export default Register