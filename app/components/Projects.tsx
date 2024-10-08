
import Image from 'next/image'
import frameA from '@/public/images/A.jpg'
import frameB  from '@/public/images/U.jpg'
import frameC  from '@/public/images/V.jpg'
import frameD  from '@/public/images/P.jpg'
import frameE  from '@/public/images/LU.jpg'
import frameF  from '@/public/images/J.jpg'
import frameG  from '@/public/images/proj.jpg'
import frameH  from '@/public/images/L.jpg'

import { FaArrowRight } from 'react-icons/fa'

import '../styles/globals.css'

const Projects = () => {

  const details = [

    {
      id: 1,
      image: '/images/link.PNG',
      name: 'link Sharing App',
      descr: 'NEXT JS project for connecting developers [On going]',
     
      l3: 'javaScript',
      
      fr1: 'ReactJs',
      fr2: 'NextJs',
      fr3: 'TailwindCss',
      db1: 'firebase',
      link: 'https://wlink-b5cu.vercel.app'
      

    },

    {
      id: 1,
      image: '/images/J.jpg',
      name: 'Jumia Clone',
      descr: 'E-commerce Landing page - [On going]',
      l1: 'html',
      l2: 'CSS',
      l3: 'javaScript',
      l4: 'PHP',
      l5: 'SQL',
   
      link: 'https://juumia-clone.netlify.app'
      

    },

    {
      id: 2,
      image: '/images/U.jpg',
      name: 'Youtube Clone',
      descr: 'Youtube API ',
      l1: 'html',
      l2: 'CSS',
      l3: 'javaScript',
      l4: 'PHP',
      l5: 'SQL',
     
      link: 'https://uutubes.netlify.app'
      

    },

    {
      id: 3,
      image: '/images/V.jpg',
      name: 'Vast Creations',
      descr: 'ReactJs Landing Page',
      l1: 'html',
      l2: 'CSS',
      l3: 'javaScript',
      l4: 'PHP',
      
      fr1: 'ReactJs',
      fr2: 'NextJs',
      fr3: 'TailwindCss',
      oth1: 'Bootstrap',
      db1: 'firebase',
      db2: 'MongoDB',
      link: 'https://vastcreation.tech'
      
    },

    {
      id: 4,
      image: '/images/P.jpg',
      name: 'Studio 4.5',
      descr: 'Photography Landing Page - [On going]',
      l1: 'html',
      l2: 'CSS',
      l3: 'javaScript',
      l4: 'PHP',
      l5: 'SQL',
      fr1: 'ReactJs',
      fr2: 'NextJs',
      fr3: 'TailwindCss',
      oth1: 'Bootstrap',
      db1: 'firebase',
      db2: 'MongoDB',
      link: 'https://yzweb.netlify.app'
      

    },

    {
      id: 5,
      image: '/images/LU.jpg',
      name: 'Poiselar Concepts',
      descr: '[Unfinished]',
      l1: 'html',
      l2: 'CSS',
      l3: 'javaScript',
      l4: 'PHP',
      l5: 'SQL',
      fr1: 'ReactJs',
      fr2: 'NextJs',
      fr3: 'TailwindCss',
      oth1: 'Bootstrap',
      db1: 'firebase',
      db2: 'MongoDB',
      link: 'https://xyweb.netlify.app'
      

    },
  ]
  return (
    <div id='works' className={`  relative w-full  px-4  md:px-[12rem] pb-[4rem]  `}>
      
        

        <div className='lg:w-[50rem] mb-[4rem] text-left md:text-center w-[100%] mt-[4rem]  mx-auto'>
            <h2 className='font-bold text-[2.5rem] md:text-[2.5rem] text-blue-200  transition-2s' >
                My Works 
            </h2>
            <p className='text-md  md:text-sm text-blue-600 font-boled mt-0 md:mt-2'>A few selection of my works</p>
        </div>

        <div className='  flex flex-wrap   mb-[2rem] items-center justify-center md:justify-start  mx-auto gap-4  w-full    z-40 '>
          
          
          
          {[...details].map((detail, id) =>(
            <div key={id} className='left-card p-[3px] pb-5 w-full md:w-[32%] mt-4 md:mt-8 rounded-xl shadow-2xl shadow-[#DDDDDD] bg-white'>
              <div className='card w-full h-[12rem] flex items-center overflow-hidden  rounded-lg bg-[#FAFAFA]   '>
                  <Image
                      src={detail.image}
                      width={2000}
                      height={1500}
                      alt = "frame img"
                      className='w-full'
                    
                  />
              </div>

              <div className='text-gray-400 text-xs'>
                <h2 className='font-bold text-lg ml-2 mt-2 mb-2 text-blue-900 '>{detail.name}</h2>
                <p className='mb-2 ml-2'>{detail.descr}</p>

                <div className='mb-2 ml-2 mb-4 '>
                  <h2 className='text-sm mb-2 font-bold text-gray-600'>Technologies</h2>
                  <a>{detail.l1}</a>
                  <a className='ml-2'>{detail.l2}</a>
                  <a className='ml-2'>{detail.l3}</a>
                  <a className='ml-2'>{detail.fr1}</a>
                  <a className='ml-2'>{detail.fr2}</a>
                  <a className='ml-2'>{detail.fr3}</a>
                </div>
                <a className='cursor-pointer' target='_blank' href={detail.link}>
                  <button className='p-1 border border-blue-600 rounded text-blue-900 ml-2 px-2 '>Visit live link</button>

                </a>
              </div>

            </div>

            


          ))}

          <div className='w-full md:w-[30%] h-[22.8rem] border border-blue-300 ml-0 md:ml-2 mt-8 rounded-xl flex items-center justify-center' >
              <a className='w-[6rem] h-[6rem] rounded-full border border-blue-300 flex text-blue-500  items-center flex-col justify-center '> <p className='text-xs'>See more</p> <FaArrowRight /> </a>
          </div>






          
         

          
        </div>




         
        
    


    </div>
  )
}
export default Projects

