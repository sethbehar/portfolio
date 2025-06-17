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
import HobbiesPage from './components/hobbiesPage';

const App = () => {
  const { isLoaded, user } = useUser()
  const { getToken } = useAuth()
  const [isPaid, setIsPaid] = useState(false)

  useEffect(() => {
    if (!user) return;

    (async () => {
      try {
        const token = await getToken();

        await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (err) {
        console.error('error in upsert effect', err);
      }
    })();
  }, [user, getToken]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const token = await getToken();

      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get-user-status`, {
        headers: { Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",},
      }
      );
      if (res.ok) {
        const data = await res.json();
        const first = data[0]
        setIsPaid(first.isPaid)
      }
    })();
  }, [user, getToken]);


  return (
    <Routes>
      {/* HOME ROUTE */}
      <Route path="/" element={
        <div className=''>
          <Hero isPaid={isPaid} user={user} isLoaded={isLoaded} />
          <About isPaid={isPaid} user={user}/>
          <Resume isPaid={isPaid} />
          <Contact isPaid={isPaid} user={user} />
        </div>}
      />
      {/* ROUTES ASIDE FROM MAIN ROUTE*/}
      <Route path='/payment' element={<Payment />} />
      <Route path="/hobbies" element={<HobbiesPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default App