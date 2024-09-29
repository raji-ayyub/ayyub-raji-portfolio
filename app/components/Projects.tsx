
import styles from './animations/components.module.css'
import Image from 'next/image'
import frameA from '@/public/images/A.jpg'
import frameB  from '@/public/images/U.jpg'
import frameC  from '@/public/images/V.jpg'
import frameD  from '@/public/images/P.jpg'
import frameE  from '@/public/images/LU.jpg'
import frameF  from '@/public/images/J.jpg'
import frameG  from '@/public/images/proj.jpg'
import frameH  from '@/public/images/L.jpg'



const Projects = () => {

  const details = [
    {
      id: 1,
      image: '/images/A.jpg',
      name: 'Poiselar Concepts',
      descr: 'Landing page',
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
      link: 'https://homeb.netlify.app'
      

    },

    {
      id: 2,
      image: '/images/U.jpg',
      name: 'Youtube Clone',
      descr: 'Youtube webapp cloned, UI and functionality',
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
      link: 'https://homeb.netlify.app'
      

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
      l5: 'SQL',
      fr1: 'ReactJs',
      fr2: 'NextJs',
      fr3: 'TailwindCss',
      oth1: 'Bootstrap',
      db1: 'firebase',
      db2: 'MongoDB',
      link: 'https://homeb.netlify.app'
      

    },

    {
      id: 4,
      image: '/images/P.jpg',
      name: 'Studio 4.5',
      descr: 'Photography Landing Page',
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
      link: 'https://homeb.netlify.app'
      

    },

    {
      id: 5,
      image: '/images/LU.jpg',
      name: 'Poiselar Concepts',
      descr: 'some random texts here',
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
      link: 'https://homeb.netlify.app'
      

    },
  ]
  return (
    <div className={`${styles.fadeIn }  relative w-full  px-8  md:px-[12rem] pb-[4rem]  `}>
      
        <div className='hidden md:flex z-0 flex-row justiify-between w-full h-full absolute overflow-hidden top-0 left-0'>
          <div className='  bg-gray-200 opacity-[0.2]   border-r-[2px] border-white   ml-[-10rem] w-[20rem]'></div>

          <div className='  ml-auto  bg-gray-200 opacity-[0.2] border-l-[2px] border-white  mr-[-10rem] w-[20rem]'></div>
        </div>

        <div className='lg:w-[50rem] mb-[4rem] text-center w-[100%] mt-[4rem] text-gray-700 mx-auto'>
            <h2 className='font-bold text-[1.2rem] md:text-[2.5rem]  transition-2s  text-center' >
                My Works 
            </h2>
            <p className='text-xs md:text-sm mt-4'>A few selection of my works</p>
        </div>



        <div className='  flex flex-wrap   mb-[2rem] items-center justify-center md:justify-start  mx-auto gap-4  w-full    z-20 '>
          
          
          
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
                  <a>{detail.l1}</a><a className='mx-2'>{detail.l2}</a><a>{detail.l3}</a>
                </div>
                <a href={detail.link}>
                  <button className='p-1 border border-blue-600 rounded text-blue-900 ml-2 px-2 '>Visit live link</button>

                </a>
              </div>

            </div>
          ))}






          
         

          
        </div>




         
        
    


    </div>
  )
}
export default Projects

