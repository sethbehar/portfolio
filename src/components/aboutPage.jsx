import React from 'react'
import BackButton from './BackButton'
const AboutPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col md:flex-row items-center justify-center px-20 py-12 gap-36 text-xl"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <BackButton />
      <div>
        <p>Hi, my name is Seth Behar and I recently graduated from the University of Florida.</p>
        <p>For the past 4 years, I have had a passion for software engineering and buildng apps in general.</p>
        <p><br/>My usual tech stack is <span className='text-blue-700'>React + Vite</span>, <span className='text-blue-500'>PostgreSQL</span>, <span className='text-green-800'>node.js</span>, and <span className='text-purple-600'>Stripe</span>.</p>
        <p><br/>I have lived in Florida for my entire life and would like to start my career in a new city</p>
      </div>

      <img src='/headshot.jpg' width={250} height={250} alt='Seth Behar' className='rounded-full '/>
    </div>
  )
}

export default AboutPage
