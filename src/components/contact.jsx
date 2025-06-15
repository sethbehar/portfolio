import React from 'react'
import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { ToastContainer, toast } from 'react-toastify';
 
const Contact = () => {

  const notify = () => toast.info('Please sign in', {
                          position: "top-right",
                          autoClose: 1500,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });

  const { isLoaded , user } = useUser();

  const [formData, setFormData] = useState({
       message: '',
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       console.log('Form Data:', formData);
       // Here you would handle form submission (e.g., sending data to a server)
     };
  return (
    <div
      id='contact'
      className="select-none min-h-screen bg-cover bg-center flex flex-col md:flex-col items-center justify-center px-6 py-12 g-2 text-xl"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <h1 className='mb-4 select-none'>Contact Me</h1>
       <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-md'>
           <textarea
            className='resize-none border-2 p-2'
            rows={5}
            cols={30}
            placeholder='Dear seth...'
             name="message"
             value={formData.message}
             onChange={handleChange}
           />
         {user & isLoaded ?
          <button type="submit" className="flex flex-row gap-2 border-2 border-black rounded-2xl px-4 py-2 self-center cursor-pointer hover:shadow-2xl transition duration-300">Submit</button>
         :
            <button onClick={notify}className="flex flex-row gap-2 border-2 border-black rounded-2xl px-4 py-2 self-center cursor-pointer hover:shadow-2xl transition duration-300">
              <span>Submit</span>
              <img src='/lock.svg' alt='x' width={25} height={25} />
            </button>
        }
       </form>
        <ToastContainer/>
    </div>
  )
}

export default Contact
