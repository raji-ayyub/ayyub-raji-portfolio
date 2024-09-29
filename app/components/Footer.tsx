import React from 'react'

import { FaHome } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'



const Footer: React.FC = () => {

    
  return (
    <div className={`  relative w-full  text-gray-600 transition  px-4 md:px-[12rem] py-[6rem] bg-gray-200 `}>


      <div className='hidden md:hidden  flex-row justiify-between w-full h-full absolute z-10 overflow-hidden top-0 left-0'>
        <div className='  bg-gray-200 opacity-[0.2]   border-r-[2px] border-white   ml-[-10rem] w-[20rem]'></div>
         
        <div className='  ml-auto  bg-gray-200 opacity-[0.2] border-l-[2px] border-white  mr-[-10rem] w-[20rem]'></div>
      </div>


      <div className='lg:w-[50rem] mb-[4rem] md:mb-[8rem] text-center w-[100%] mt-[4rem] text-gray-700 mx-auto'>
            <h2 className='font-bold text-[1.2rem] md:text-[2.5rem]  transition-2s  text-center' >
                Contact Me 
            </h2>
      </div>


      <div className='w-full flex flex-wrap md:gap-4 md:justify-between gap-24 z-20'>

        <form className='w-full md:w-[45%] flex flex-col gap-4'>

            <input className='pl-6 bg-white py-2' type="text" placeholder='Name' id="name" />
            <input className='pl-6 bg-white py-2' type="email" placeholder='Email' id="email" />
            <input className='pl-6 bg-white py-2' type="text" placeholder='Subject' id="subject" />
            <textarea className='pl-6 bg-white py-2' placeholder='Message..' rows={5} name="message" id="message"></textarea>


            <input type="button" value={'Submit'} className="submit bg-blue-800 py-4 text-white font-bold" />
        </form>



        <div className='w-full md:w-[40%] flex flex-col gap-4'>
            <div className='flex flex-col gap-2 mb-6'>
                <h1 className='font-bold'>Ayyub Raji</h1>
                <p>Web Developer</p>
            </div>

            <div className='flex flex-col gap-4'>
                <p className='font-bold'>Phone</p>
                <p>+234 814 501 4012</p>
                
                <p className='font-bold'>Email</p>
                <p>ayyubraji87@gmail.com</p>

                <p className='font-bold'>Website</p>
                <p>ayyubraji.netlify.app</p>

                <div className='flex text-xl text-blue-900 gap-4 mt-4'>
                    <FaDiscord />
                    <FaFacebook />
                    <FaLinkedin />
                    <FaTwitter />

                </div>
            </div>
        </div>

      </div>

    
      


    </div> 
  
  )
}

export default Footer




