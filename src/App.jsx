import React, { useState } from 'react'
import Hero from './components/hero';
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';
import Payment from './components/payment';
import { Routes, Route } from 'react-router-dom'
import { useAuth, useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import ResumePage from './components/resumePage';
import AboutPage from './components/aboutPage';

const App = () => {
  const { isLoaded, user } = useUser()
  const { getToken } = useAuth()
  const [isPaid, setIsPaid] = useState(false)

  useEffect(() => {
    if (!user) return;

    (async () => {
      try {
        const token = await getToken();

        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('status ', res.status);
      } catch (err) {
        console.error('error in upsert effect', err);
      }
    })(); 
  }, [user, getToken]);

  useEffect(() => {
    setIsPaid(true)
  }, [user])



  return (
    <Routes>
      {/* HOME ROUTE */}
      <Route path="/" element={
        <div className=''>
          <Hero  isPaid={isPaid} user={user} isLoaded={isLoaded}/>
          <About isPaid={isPaid} />
          <Resume isPaid={isPaid}/>
          <Contact isPaid={isPaid} user={user} isLoaded={isLoaded}/>
        </div>} 
      />
      {/* ROUTES ASIDE FROM MAIN ROUTE*/}
      <Route path='/payment' element={<Payment />} />
      <Route path="/hobbies" element={<></>} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/diploma" element={<></>} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default App