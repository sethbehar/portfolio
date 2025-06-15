import React from 'react'
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
  const { user } = useUser()
  const { getToken } = useAuth()


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

  return (
    <Routes>
      {/* HOME ROUTE */}
      <Route path="/" element={
        <div className=''>
          <Hero />
          <About />
          <Resume />
          <Contact />
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