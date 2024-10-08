import React from 'react'
import styles from '@/app/components/animations/components.module.css'
import Testimonialscroll from './scroller/Testimonialscroll'




const Testimonials: React.FC = () => {

  // const slides = [
  //   { id: 1, name: 'bola', image: 'images/L.jpg', caption: 'some texts maybe' },
  //   { id: 2, name: 'bola', image: 'images/L.jpg', caption: 'some texts maybe' },
  //   { id: 3, name: 'bola', image: 'images/L.jpg', caption: 'some texts maybe' },
  //   { id: 4, name: 'bola', image: 'images/L.jpg', caption: 'some texts maybe' },
  //   { id: 5, name: 'bola', image: 'images/L.jpg', caption: 'some texts maybe' },

  // ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };
    
  return (
    <div className={`hidden  relative w-full transition  px-2 md:px-[10rem] py-[6rem]  `}>


      <div className='hidden md:flex  flex-row justiify-between w-full h-full absolute z-0 overflow-hidden top-0 left-0'>
        <div className='  bg-gray-200 opacity-[0.2]   border-r-[2px] border-white   ml-[-10rem] w-[20rem]'></div>
         
        <div className='  ml-auto  bg-gray-200 opacity-[0.2] border-l-[2px] border-white  mr-[-10rem] w-[20rem]'></div>
      </div>

      <div className='lg:w-[50rem] mb-[4rem] text-left md:text-center w-[95%] mt-[4rem]  mx-auto'>
            <h2 className='font-bold text-[2.5rem] md:text-[2.5rem] text-blue-200  transition-2s' >
                Testimonials
            </h2>
            <p className='text-md  md:text-sm text-blue-600 font-boled mt-0 md:mt-2'>From Satisfied Clients</p>
      </div>
      



        


       <Testimonialscroll />


        
          


     
 

      

    </div> 
  
  )
}

export default Testimonials




