import React from 'react'
import '../styles/globals.css'
import { FaGithub, FaDownload } from 'react-icons/fa'

function Header() {
  return (
    <div className='absolute top-0 left-0 w-full text-gray-500  px-[2rem] md:px-[4rem] z-40'>
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
              <a>Home</a>
              <a>About</a>
              <a>My Works</a>
              <a>Blogs</a>

          </div>
          <a className=' p-4 py-2 rounded-md flex items-center gap-2 border border-blue-300 bg-gradient font-bold cursor-pointer'>{`Resume`} <FaDownload /></a>
      </div>
    </div>
  )
}

export default Header
