import React from 'react'
import Image from 'next/image'
import nextimg from '@/public/images/next.jpg'
import reactimg from '@/public/images/react.jpg'
import tailwnd from '@/public/images/tailwind.jpg'
import api from '@/public/images/api.jpg'

import '../styles/globals.css'

const Hero = () => {
  return (

    <div>

      <div className='hidden md:flex  w-full  md:h-[100%] flex-row justiify-between absolute overflow-hidden top-0 left-0'>
          <div className=' top-0 h-full bg-gray-200 opacity-[0.2]  rounded-b border-r-[2px] border-white   rounded-[40%] ml-[-10rem] w-[20rem]'></div>

          <div className=' top-0 ml-auto h-full bg-gray-200 opacity-[0.2] border-l-[2px] border-white rounded-b  rounded-[40%] mr-[-10rem] w-[20rem]'></div>
      </div>

      <div className={` px-6 md:px-8  py-[3rem] w-full md:h-[100vh] relative `}>
      

      






        <div className='w-full lg:w-[50rem] text-left md:text-center w-[100%] mt-[4rem]  text-gray-700 mx-auto'>
            <h2 className='font-bold text-[1.3rem] md:text-[2rem] mt-[6rem] md:mt-0 transition-2s ' >
                Transforming Concepts into <br className='hidden md:flex' /> Seamless  <span className='text-blue-800 text-gradient'>User Experiences</span>
            </h2>

            
            <div className='flex flex-col  mt-4 gap-2 '>
              <div className="typing-demo1  text-left md:text-center md:mx-auto text-blue-800 text-xl  text-shadow-lg">
                {`Hello, I'm Ayyub`}
              </div>
              <div className="typing-demo2  text-left md:text-center md:mx-auto  text-xs font-bold text-blue-700 ">
                Welcome to Essence Codes!
              </div>
            </div>

            <button className=' hidden p-3 mx-auto rounded-lg border border-blue-200 text-blue-900 cursor-pointer py-2 mt-4'>See My Works</button>        
        </div>




        <div className='  flex flex-col md:flex-row  h-auto mx-auto gap-10 w-full justify-center mt-[4rem] '>
          
          <div className='left-card hidden   rounded-[2rem] md:flex items-center justify-center h-[12.8rem] w-[15.2rem]  bg-white'>
            <div className='card w-[15rem] h-[12.6rem]  rounded-[1.9rem] bg-[#FAFAFA]   '>
              <p className='text-[8px] bg-gray-200 w-[6rem] text-center  text-gray-500 py-1 font-bold ml-4 mb-1 mt-4 rounded-full  '>Front-end Developer</p>
              <h2 className='font-bold text-lg text-gray-500 ml-5 mb-1'>Ayyub Raji</h2>
              
              <div className='flex flex-col'>
                <a className='text-[10px] font-bold text-gray-500 ml-5 mb-1'>ayyubraji87@gmail.com</a>
                <a className='text-[10px] font-bold text-gray-500 ml-5 mb-1'>Nigeria</a>
                <a className='text-[10px] font-bold text-gray-500 ml-5 mb-1'>Full-time / Freelance</a>
              </div>
              
              <div className='border-t w-[85%] ml-4 mt-2 flex flex-wrap pt-2'>
                <a className='text-[8px] bg-green-100 mb-1 px-2 mr-1 text-center  text-gray-500 py-1 font-bold  rounded-full  '>APIs</a>
                <a className='text-[8px] bg-blue-100 mb-1 px-2 mr-1 text-center  text-gray-500 py-1 font-bold  rounded-full  '>DASHBOARDS</a>
                <a className='text-[8px] bg-yellow-100 mb-1 mr-1 w-[5rem] text-center  text-gray-500 py-1 font-bold  rounded-full  '>Dynamic Pages</a>
                <a className='text-[8px] bg-purple-100 mb-1 mr-1 w-[6rem] text-center  text-gray-500 py-1 font-bold  rounded-full  '>Backend Integrations</a>

              </div>

            </div>
          </div>

          <div className='middle-card p-[2.5px] rounded-[2rem]  bg-white'>
            <div className=' relative card w-[20rem] h-[16rem] flex justify-center overflow-hidden rounded-[1.8rem] bg-[#FAFAFA]   '>
            
              <div className=' h-[3rem] overflow-hidden items-center justify-center rounded-sm bg-[transparent] flex items-center justify-center text-sm  absolute top-[8rem] left-8 w-[4rem] text-center z-10 text-white font-bold'>
               
                <Image

                  src={reactimg}
                  width={600}
                  height={400}
                  className='w-[8rem] '
                  alt="next logo"
                />
              </div>

              <div className=' h-[3rem] overflow-hidden items-center justify-center rounded-sm bg-[transparent] flex items-center justify-center text-sm  absolute top-[8rem] right-8 w-[4rem] text-center z-10 text-white font-bold'>
                <Image

                  src={tailwnd}
                  width={1000}
                  height={800}
                  className='w-[8rem]'
                  alt="next logo"
                />
              </div>

              <div className=" absolute flex justify-center rounded-full opacity-[0.5] border border-1 border-white  shadow-2xl shadow-[#AAAAAA] bg-white top-[55%] h-[18rem] w-[110%] z-20"></div>

                <div className='bg-gray-500  overflow-hidden items-center justify-center  bg-[black] flex items-center justify-center text-sm  absolute top-[7rem] w-[5rem] text-center z-20 text-white font-bold'>
                  <Image

                    src={nextimg}
                    width={1000}
                    height={800}
                    className='w-[8rem] '
                    alt="next logo"
                  />
                </div>

              


              <div className="relative rounded-full flex justify-center  opacity-[0.55]  shadow-2xl shadow-[#AAAAAA] bg-white top-[65%] h-[18rem] w-[110%] z-20 "></div>
              <a className='absolute bottom-[1rem] text-center border border-blue-400 text-blue-600 text-sm flex items-center rounded-full  justify-center  h-[2.5rem] z-50 w-[40%] animate-pulse cursor-pointer hover:animate-none'>Hire Me</a>


            </div>
          </div>



          <div className=' left-card hidden rounded-[2rem] md:flex items-center justify-center h-[10.25rem] w-[15.25rem]  shadow-2xl shadow-[#DDDDDD] bg-white  translate delay-150'>
            <div className='card w-[15rem] h-[10rem] flex items-center justify-center overflow-hidden  rounded-[1.9rem] bg-blue-100  '>
              <Image

              src={api}
              width={1000}
              height={800}
              className='w-[100%] mx-auto'
              alt="next logo"
              />
            </div>
          </div>


          
        </div>




         
        
    


      </div>

    </div>
  )
}
export default Hero

