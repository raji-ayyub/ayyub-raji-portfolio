import styles from './animations/components.module.css'
import Scroll from './scroller/Scroll'
function About() {
  return (
    <div className={` ${styles.fadeIn} relative w-full transition  px-4 md:px-[12rem] py-[6rem]  `}>


      <div className='hidden md:flex  flex-row justiify-between w-full h-full absolute overflow-hidden top-0 left-0'>
        <div className='  bg-gray-200 opacity-[0.2]   border-r-[2px] border-white   ml-[-10rem] w-[20rem]'></div>
         
        <div className='  ml-auto  bg-gray-200 opacity-[0.2] border-l-[2px] border-white  mr-[-10rem] w-[20rem]'></div>
      </div>




      
      <div className= {`flex flex-col gap-6  w-full`}>



        <div className={`w-full flex justify-between  flex-col md:flex-row`}>

          <div className={` ${styles.bgBlur} rounded-2xl mb-4 md:mb-0 relative w-full md:w-[60%]  h-[15rem] md:h-[20rem]`}>
            <h4 className={`absolute w-[18rem] text-blue-900 text-sm md:text-lg font-bold left-4 bottom-4`}>I excel at open project <br /> communications, team works and I prioritize client satisfaction</h4>
          </div>




          <div className={`flex flex-col w-full md:w-[38%] h-[20rem] justify-between gap-2`} >
            
            <div className={`w-full h-[9rem] ${styles.bgBlur} rounded-2xl`}>
              <h4 className='text-sm md:text-xl font-bold text-blue-900 ml-4 mt-5'>I am vast with frameworks, <br />as well as core Vanilla Javascript</h4>
            </div>



            <div className={`w-full flex  flex-row  h-[10rem] justify-between overflow-hidden ${styles.bgBlur} rounded-2xl`}>
              
              <div className={`w-[48%] md:w-[48%]  ml-4  flex flex-col justify-center `}>
                
                <p className='text-xs text-gray-400'>I constantly try to  <br />improve</p>
                <h4 className='text-md md:text-xl font-bold text-blue-900'>My tech stack</h4>
              </div>



              <div className={`w-[45%] md:w-[48%] h-full  justify-end flex flex-wrap gap-2`}>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-white  text-[8px] md:text-xs font-bold bg-cyan-800`} >React.js</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[8px] md:text-xs font-bold bg-blue-100`} >Next Js</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[8px] md:text-xs font-bold bg-blue-100`} >Tailwind css</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[8px] md:text-xs font-bold bg-blue-100`} >Bootstrap</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[8px] md:text-xs font-bold bg-blue-100`} >Git</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[8px] md:text-xs font-bold bg-blue-100`} >Github</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[8px] md:text-xs font-bold bg-blue-100`} >Fire base</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[8px] md:text-xs font-bold bg-blue-100`} >react</button>

              </div>

            </div>

          </div>

        </div>





        <div className={`w-full flex justify-between flex-col md:flex-row`}>


          <div className={`flex flex-col w-full  md:w-[38%] h-[20rem] justify-between gap-2`} >
            
            <div className={`w-full h-[9rem] ${styles.bgBlur} rounded-2xl`}>
              <h4 className='text-lg md:text-xl font-bold text-blue-900 ml-4 m-4 mb-2'>All skill-set</h4>
              
              
              
              <Scroll />

            </div>



            <div className={`w-full flex flex-col md:flex-row mb-4 md:mb-0  h-[10rem] ${styles.bgBlur} rounded-2xl`}>
             
              <div className={`w-full  h-full flex flex-col `}>
                <h4 className='text-lg font bold text-blue-900 text-left ml-4 mt-4'>Do you want to start a project together?</h4>
                <a href='mailto:ayyubraji86@gmail.com' className='text-lg ml-4 mt-6 w-[6rem] text-center rounded px-4  font-bold text-blue-900 border border-blue-500 hover:border-blue-200 transition-all ease-in-out duration-500 '>Email</a>
              </div>

            </div>

          </div>



          <div className={`relative w-full md:w-[60%] ${styles.bgBlur} rounded-2xl h-[15rem] md:h-[20rem]`}>
            <h4 className={`absolute left-4 bottom-4 text-blue-900`}>Currently building <br /> My Portfolio Website</h4>
          </div>

        </div>





      </div>
 

       





       
      
  


    </div> 
  )
}

export default About
