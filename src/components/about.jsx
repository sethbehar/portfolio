import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {

  const { user } = useUser()

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-36 text-xl"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Left Side Text */}
      <div className="text-center md:text-left max-w-md flex flex-col gap-12 leading-8">
        <p className='text-black select-none'>I recently graduated from the <span className='text-blue-700'>University of Florida</span> with a Computer Science degree.</p>
        <p className='text-black select-none'>prev. BI Developer Intern @ <span className='text-green-800'>WebstaurantStore</span></p>
        <p className='text-black select-none'>prev. Software Engineer Intern @ <span className='text-pink-400'>ebacon</span></p>
        <p className='text-black select-none'>Currently pursuing backend dev. roles </p>
      </div>

      {/* Right Side Text */}
      <div className="text-center md:text-left max-w-sm flex flex-col gap-4">
        <p className='select-none'>I created this site with <span className='text-blue-700'>React + Vite</span>, <span className='text-blue-500'>PostgreSQL</span>, <span className='text-green-800'>node.js</span>, and <span className='text-purple-600'>Stripe</span></p>
        {user ? <Link to={'/payment'} className="select-none border-2 border-black rounded-2xl px-4 py-2 self-center cursor-pointer hover:shadow-2xl transition duration-300">
          Unlock More
        </Link>
        : <button className="flex flex-row gap-2 select-none border-2 border-black rounded-2xl px-4 py-2 self-center cursor-pointer hover:shadow-2xl transition duration-300">
          <img src='/lock.svg' alt='x' width={15} height={15} className=''/>
          <span>Unlock More</span>
        </button> }
      </div>
    </div>
  )
}

export default About
