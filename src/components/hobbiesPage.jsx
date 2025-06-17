import React from 'react'
import BackButton from './BackButton'
const HobbiesPage = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-20 py-12 gap-18 text-xl"
            style={{ backgroundImage: "url('/bg.png')" }}
        >
            <BackButton />

            <h1 className='text-3xl'>Hobbies</h1>
            <div className='flex flex-col'>
                <span>1. Cold plunging daily <span className='text-sm'>(30+ day streak)</span></span><br/>
                <span>2. Chess <span className='text-sm'>(sethbehar on chess.com)</span></span><br/>
                <span>3. Long distance runs <span className='text-sm'>(training for ultra marathon)</span></span><br/>
                <span>4. Dire Straits <span className='text-sm'>(live versions)</span></span><br/>
                <span>5. Coffee <span className='text-sm'>(black, anytime of day)</span></span><br/>
                <span>6. Eating clean <span className='text-sm'>(nothing specific)</span></span><br/>
                <span>7. Basketball and tennis <span className='text-sm'>(with friends)</span></span><br/>
                <span>8. Calestenics <span className='text-sm'>(training for handstand pushup)</span></span><br/>
                <span>9. Reading <span className='text-sm'>(currently reading 'the big short')</span></span><br/>
            </div>
        </div>
)}

export default HobbiesPage
