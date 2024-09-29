import React from 'react'
import Brandscroll from '@/app/components/scroller/Brandscroll'
import { FaHome } from 'react-icons/fa'


const Brands: React.FC = () => {

    
  return (
    <div className={` relative w-full transition  px-2 md:px-[10rem] py-[6rem]  `}>


      <div className='hidden md:flex  flex-row justiify-between w-full h-full absolute z-0 overflow-hidden top-0 left-0'>
        <div className='  bg-gray-200 opacity-[0.2]   border-r-[2px] border-white   ml-[-10rem] w-[20rem]'></div>
         
        <div className='  ml-auto  bg-gray-200 opacity-[0.2] border-l-[2px] border-white  mr-[-10rem] w-[20rem]'></div>
      </div>


      <div className='lg:w-[50rem] mb-[4rem] text-left md:text-center w-[95%] mt-[4rem]  mx-auto'>
            <h2 className='font-bold text-[2.5rem] md:text-[2.5rem] text-blue-200  transition-2s' >
                Brands
            </h2>
            <p className='text-md  md:text-sm text-blue-600 font-boled mt-0 md:mt-2'>{ `I've Worked With` }</p>
      </div>


      <Brandscroll />


    </div> 
  
  )
}

export default Brands




