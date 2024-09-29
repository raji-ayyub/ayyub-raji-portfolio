'use client'

import React from 'react'
import './scroll.css';

const Scroll: React.FC = () => {

    const slides = [
        'html',
        'css',
        'Javascript',
        'Web Dev',
        'APIs',
        
    ]

    const slides1 = [
        'ReactJs',
        'Vercel',
        'NextJs',
        'TailwindCss',
        'github',
        
    ]

    const slides2 = [
        'Netlify',
        'Firebase',
        'Git',
        'PHP',
        'Bootstrap',
        
    ]

  return (
    


    <div className=' relative w-full  flex flex-col gap-2'>

        <div className='absolute flex items-center justify-between w-full overflow-hidden h-full'>

            <div className='rounded-full bg-white w-[10rem] h-[10rem] ml-[-9rem] opacity-[0.7] shadow shadow-xl shadow-white z-20'></div>
            <div className='rounded-full bg-white w-[10rem] h-[10rem] mr-[-9rem] opacity-[0.7] shadow shadow-xl shadow-white z-20'></div>

        </div>
                    

                    
        <div className='w-[98%] mx-auto overflow-hidden relative'>
            <div className='scroll-track rows flex text-gray-400 gap-2 w-[98%] mx-auto items-center z-40 overflow-auto'>
                        
                        {[...slides, ...slides ].map((slide, index) => (
                            <div key={index} className='rounded-lg p-1 w-[40%] text-center bg-white font-bold text-[10px]'>
                                {slide}
                            </div>
                        ))}

            </div>
        </div>


        <div className='w-[98%] mx-auto overflow-hidden relative'>
            <div className='scroll-track2 rows flex text-gray-400 gap-2 w-[98%] mx-auto items-center z-40 overflow-auto'>
                        
                        {[...slides1, ...slides1 ].map((slide, index) => (
                            <div key={index} className='rounded-lg p-1 w-[40%] text-center bg-white font-bold text-[10px]'>
                                {slide}
                            </div>
                        ))}

            </div>
        </div>

        <div className='w-[98%] mx-auto overflow-hidden relative'>
            <div className='scroll-track rows flex text-gray-400 gap-2 w-[98%] mx-auto items-center z-40 overflow-auto'>
                        
                        {[...slides2, ...slides2 ].map((slide, index) => (
                            <div key={index} className='rounded-lg p-1 w-[40%] text-center bg-white font-bold text-[10px]'>
                                {slide}
                            </div>
                        ))}

            </div>
        </div>
                    
                    
                    
                    

    </div>
  )
}

export default Scroll
