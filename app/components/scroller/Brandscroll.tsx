'use client'


import React from 'react'
import './brand.css'
import Image from 'next/image'

const Testimonialscroll:React.FC = () => {

    const slides = [
        {
            id: 1, name: 'Bola', image: '/images/rajtronix.png', content: 'lorem seems to be unavailable so'
        },

        {
            id: 2, name: 'Bola', image: '/images/nehub.png', content: 'lorem seems to be unavailable so'
        },

        {
            id: 3, name: 'Bola', image: '/images/logo.png', content: 'lorem seems to be unavailable so'
        },

        {
            id: 4, name: 'Bola', image: '/images/poiselar.jpg', content: 'lorem seems to be unavailable so'
        },
        {
            id: 5, name: 'Bola', image: '/images/teenergy.jpg', content: 'lorem seems to be unavailable so'
        },
    ]
  return (
    <div className={ `w-full relative overflow-hidden  flex  flex-col gap-2`}>

        
        <div className='absolute flex items-center justify-between  w-full overflow-hidden h-full'>

            <div className='rounded-full bg-white w-[15rem] h-[120%] ml-[-12rem] opacity-[0.9] shadow shadow-xl shadow-white z-40'></div>
            <div className='rounded-full bg-white w-[15rem] h-[120%] mr-[-12rem] opacity-[0.9] shadow shadow-xl shadow-white z-40'></div>

        </div>
        
        
        <div className='testi-track  flex items-center z-20 relative '>


            
            
        
            {[...slides, ...slides].map((slide, id) =>(
                <div key={id} className='card w-[10rem] md:w-[20%] h-[5rem] md:h-[6rem] mb-2 rounded-md gap-4 bg-transparent flex p-2'>
                    <div  className='flex justify-center w-[80%] md:w-[60%] mx-auto items-center'>
                      
                            <Image 
                                src={slide.image}
                                width={800}
                                height={500}
                                alt='image'
                                className='client'
                            />
                       

                      
                    </div>

                   
                </div>
            ))}
        


        </div>

       
    </div>
    
  )
}

export default Testimonialscroll
