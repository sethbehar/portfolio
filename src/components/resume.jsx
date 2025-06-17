import React from 'react'
import { Link } from 'react-router-dom'
const Resume = ({ isPaid }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-36 text-xl"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Left Side Text */}
      <div className="text-center md:text-left max-w-sm flex flex-col gap-4">
        <p className='select-none'>View my resume</p>
        {isPaid ? <Link to='/resume' onClick={() => window.scrollTo(0, 0)}
          className="select-none border-2 border-black rounded-2xl px-4 py-2 self-center cursor-pointer hover:shadow-2xl transition duration-300">
          Resume
        </Link>
          :
          <button className="select-none flex flex-row gap-2 border-2 border-black rounded-2xl px-4 py-2 self-center cursor-pointer hover:shadow-2xl transition duration-300">
            <img src='/lock.svg' alt='x' width={15} height={15} className=''/>
            <span>Resume</span>
          </button>
        }
      </div>

      {/* Middle Side Text */}
      <div className="select-none text-center md:text-left max-w-sm flex flex-col gap-4">
        <p className=''>View my diploma</p>
        {isPaid ? <Link to='/diploma' className="border-2 border-black rounded-2xl px-4 py-2 self-center cursor-pointer hover:shadow-2xl transition duration-300">
          Diploma
        </Link>
          :
          <button className="flex flex-row gap-2 border-2 border-black rounded-2xl px-4 py-2 self-center cursor-pointer hover:shadow-2xl transition duration-300">
            <img src='/lock.svg' alt='x' width={15} height={15} />
            <span>Diploma</span>
          </button>
        }
      </div>

      {/* Right Side Text */}
      <div className="select-none text-center md:text-left max-w-sm flex flex-col gap-4">
        <p className=''>View my hobbies</p>
        {isPaid ? <Link to='/hobbies' className="border-2 border-black rounded-2xl px-4 py-2 self-center cursor-pointer hover:shadow-2xl transition duration-300">
          Hobbies
        </Link>
          :
          <button className="flex flex-row gap-2 border-2 border-black rounded-2xl px-4 py-2 self-center cursor-pointer hover:shadow-2xl transition duration-300">
            <img src='/lock.svg' alt='x' width={15} height={15} />
            <span>Hobbies</span>
          </button>
        }
      </div>

    </div>
  )
}

export default Resume
