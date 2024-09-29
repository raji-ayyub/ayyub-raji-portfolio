'use client'


import React from 'react'
import './testimonial.css'
import Image from 'next/image'

const Testimonialscroll:React.FC = () => {

    const slides = [
        {
            id: 1, name: 'Client', image: '/images/L.jpg', content: 'lorem ipsum dolor set ammet'
        },

        {
            id: 2, name: 'Client', image: '/images/L.jpg', content: 'lorem ipsum dolor set ammet'
        },

        {
            id: 3, name: 'Client', image: '/images/L.jpg', content: 'lorem ipsum dolor set ammet'
        },

        {
            id: 4, name: 'Client', image: '/images/L.jpg', content: 'lorem ipsum dolor set ammet'
        },
    ]
  return (
    <div className={ `w-full relative overflow-hidden  flex  flex-col gap-2`}>

        
        <div className='absolute flex items-center justify-between  w-full overflow-hidden h-full'>

            <div className='rounded-full bg-white w-[15rem] h-[120%] ml-[-12rem] opacity-[0.9] shadow shadow-xl shadow-white z-40'></div>
            <div className='rounded-full bg-white w-[15rem] h-[120%] mr-[-12rem] opacity-[0.9] shadow shadow-xl shadow-white z-40'></div>

        </div>
        
        
        <div className='testi-track  flex items-center gap-4 z-20 relative '>


            
            
        
            {[...slides, ...slides].map((slide, id) =>(
                <div key={id} className='card w-[10rem] md:w-[14rem] h-[5rem] md:h-[6rem] mb-2 rounded-md gap-4 bg-white shadow shadow-gray-100  flex flex-col p-2'>
                    <div  className='flex gap-2 items-center'>
                        <div className='img-wrap w-4 h-4 bg-blue-600 overflow-hidden rounded-full'>
                            <Image 
                                src={slide.image}
                                width={80}
                                height={80}
                                alt='image'
                                className='client'
                            />
                        </div>

                        <h4 className='text-sm'>{slide.name}</h4>
                    </div>

                    <p className='text-xs'>{slide.content}</p>
                </div>
            ))}
        


        </div>

        <div className='testi-track2   flex items-center gap-4 z-20 relative '>


            
            
        
            {[...slides, ...slides].map((slide, id) =>(
                <div key={id} className='card  w-[10rem] md:w-[14rem] h-[5rem] md:h-[6rem] mb-2 rounded-md gap-4 bg-white shadow shadow-gray-100   flex flex-col p-2'>
                    <div  className='flex gap-2 items-center'>
                        <div className='img-wrap w-4 h-4 bg-blue-600 overflow-hidden rounded-full'>
                            <Image 
                                src={slide.image}
                                width={80}
                                height={80}
                                alt='image'
                                className='client'
                            />
                        </div>

                        <h4 className='text-sm'>{slide.name}</h4>
                    </div>

                    <p className='text-xs'>{slide.content}</p>
                </div>
            ))}
        


        </div>

        
    </div>
    
  )
}

export default Testimonialscroll
