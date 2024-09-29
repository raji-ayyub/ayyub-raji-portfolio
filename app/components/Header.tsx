import React from 'react'
import '../styles/globals.css'
import { FaGithub, FaDownload, FaArrowAltCircleRight } from 'react-icons/fa'

function Header() {
  return (
    <div className='absolute top-0 left-0 w-full text-gray-500  px-4 md:px-[4rem] z-40'>
      <div className='md:w-[80%] w-full mx-auto border-b-[1px] border-white h-[4rem]  flex flex-row text-[12px] justify-between items-center'>
        
          <a href="https://github.com/raji-ayyub"> 

            <div className='font-bold text-blue-700 text-gradient flex gap-2'>
              <div className='w-4 h-4 flex items-center justify-center text-xl rounded-full'>
                <FaGithub />
              </div>
                Ayyub Raji
            </div>
          </a>

          <div className='w-[20%] md:w-[25%]  hidden md:flex  lg:mr-[-16rem] justify-between '>
              <a className='border-b-[2px] border-blue-200 hover:border-blue-300 '>Home</a>
              <a className='border-b-[2px]  border-transparent hover:border-blue-200 cursor-pointer ' href='#about'>About</a>
              <a className='border-b-[2px]  border-transparent hover:border-blue-200 cursor-pointer ' href='#works'>My Works</a>
              <a className='border-b-[2px]  border-transparent hover:border-blue-200 cursor-pointer ' href='#contact'>{ `Contact`}</a>

          </div>
          <a href='https://docs.google.com/document/d/18AS6jZKh2JPw-4uLRPj5wbjKLHxICPcMbOxI0f8ZURc/edit#heading=h.psj4saghc840' target='_blank' className=' p-4 py-2 rounded-md flex items-center gap-2 border border-blue-300 bg-gradient font-bold cursor-pointer'>{`Resume`} <FaArrowAltCircleRight /></a>
      </div>
    </div>
  )
}

export default Header
