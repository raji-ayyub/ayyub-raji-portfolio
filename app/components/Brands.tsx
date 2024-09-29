import React from 'react'
import styles from '@/app/components/animations/components.module.css'
import Brandscroll from '@/app/components/scroller/Brandscroll'
import { FaHome } from 'react-icons/fa'


const Brands: React.FC = () => {

    
  return (
    <div className={` ${styles.fadeIn} relative w-full transition  px-4 md:px-[12rem] py-[6rem]  `}>


      <div className='hidden md:flex  flex-row justiify-between w-full h-full absolute z-0 overflow-hidden top-0 left-0'>
        <div className='  bg-gray-200 opacity-[0.2]   border-r-[2px] border-white   ml-[-10rem] w-[20rem]'></div>
         
        <div className='  ml-auto  bg-gray-200 opacity-[0.2] border-l-[2px] border-white  mr-[-10rem] w-[20rem]'></div>
      </div>


      <div className='lg:w-[50rem] mb-[4rem] text-center w-[100%] mt-[4rem] text-gray-700 z-20 mx-auto'>
            <h2 className='font-bold text-[1.2rem] md:text-[2.5rem]  transition-2s  text-center' >
                Brands 
            </h2>
            <p className='text-xs md:text-sm mt-4'> I have worked with</p>
      </div>


      <Brandscroll />


    </div> 
  
  )
}

export default Brands




