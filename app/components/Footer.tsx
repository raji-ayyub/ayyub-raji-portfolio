'use client'

import { FaHome } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

import '../styles/globals.css'

import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../utils/firebase'; 

  

const Footer: React.FC = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    content: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
    


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Save form data to Firestore
      await addDoc(collection(db, 'contactMessages'), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        content: formData.content,
        createdAt: new Date()
      });

      setSubmitted(true);
    } catch (err) {
      setError('Submission failed, please try again.');
      console.error('Error adding document: ', err);
    }
  };


  return (
    <div id='contact' className={`  relative w-full  text-gray-600 transition  px-4 md:px-[12rem] py-[6rem] bg-gray-200 `}>


      <div className='hidden md:hidden  flex-row justiify-between w-full h-full absolute z-10 overflow-hidden top-0 left-0'>
        <div className='  bg-gray-200 opacity-[0.2]   border-r-[2px] border-white   ml-[-10rem] w-[20rem]'></div>
         
        <div className='  ml-auto  bg-gray-200 opacity-[0.2] border-l-[2px] border-white  mr-[-10rem] w-[20rem]'></div>
      </div>


      <div className='lg:w-[50rem] mb-[2rem] md:mb-[7rem] text-left md:text-center w-[100%] mt-[4rem] text-gradient flex flex-col items-start md:items-center  mx-auto'>
            <h2 className='font-bold text-[1.5rem] md:text-[2.5rem]  transition-2s' >
                Contact Me 
            </h2>
            
      </div>


      <div className='w-full flex flex-wrap md:gap-2 md:justify-around gap-24 z-20'>

        <form onSubmit={handleSubmit} className='w-full md:w-[45%] flex flex-col gap-4'>

            <input className='pl-6 bg-white py-2 rounded-md' 
              type="text" 
              placeholder='Name'
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input className='pl-6 bg-white py-2 rounded-md' 
              type="email" 
              placeholder='Email' 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input className='pl-6 bg-white py-2 rounded-md' 
              type="text" 
              placeholder='Subject' 
              id="subject" 
              
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea className='pl-6 bg-white py-2 rounded-md' 
              placeholder='Message..' 
              rows={5} 
              
              id="message"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              >
              

            </textarea>


            <input type="submit" 
              value={'Send message'} 
              className="submit  py-4 text-white font-bold rounded-md bg-grad" 
            />

            {submitted && <p className='text-blue-600 text-sm'>Thank you for your message! We'll get back to you soon.</p>}
            {error && <p className='text-red-600 text-sm'>{error}</p>}
        </form>



        <div className='w-full md:w-[40%]  flex flex-col justify-between gap-2'>
            <div className='flex flex-col gap-0 mb-4'>
                <h1 className='font-bold text-lg text-gradient'>Ayyub Raji</h1>
                <p className='text-sm text-blue-900'>Web Developer</p>
            </div>

            <div className='flex flex-col gap-1'>
                <p className='font-bold'>Phone</p>
                <p className='text-sm mb-8 text-blue-800'>+234 814 501 4012</p>
                
                <p className='font-bold'>Email</p>
                <p className='text-sm mb-8'>ayyubraji87@gmail.com</p>

                <p className='font-bold'>Website</p>
                <p className='text-sm mb-8'>ayyubraji.vercel.app</p>

                <div className='flex text-xl text-blue-700 gap-4 mt-4'>
                    <FaDiscord />
                    <FaFacebook />

                    <a href='https://www.linkedin.com/in/ayyub-raji-3314a2192?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                    <FaLinkedin />
                    </a>

                    <FaTwitter />

                </div>
            </div>
        </div>

      </div>

    
      


    </div> 
  
  )
}

export default Footer




