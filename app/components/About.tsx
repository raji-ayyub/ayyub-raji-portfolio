
import Scroll from './scroller/Scroll'
import { FaArrowCircleRight, FaEnvelope } from 'react-icons/fa'
import '../styles/globals.css'



function About() {
  return (
    <div className={`relative w-full transition  px-4 md:px-[12rem] py-[6rem]  `}>


      <div className='hidden md:flex  flex-row justiify-between w-full h-full absolute overflow-hidden top-0 left-0'>
        <div className='  bg-gray-200 opacity-[0.2]   border-r-[2px] border-white   ml-[-10rem] w-[20rem]'></div>
         
        <div className='  ml-auto  bg-gray-200 opacity-[0.2] border-l-[2px] border-white  mr-[-10rem] w-[20rem]'></div>
      </div>




      
      <div className= {`flex flex-col gap-6  w-full`}>



        <div className={`w-full flex justify-between  flex-col md:flex-row`}>

          <div className={` rounded-2xl mb-4 md:mb-0 relative w-full md:w-[60%]  h-[15rem] md:h-[20rem] bg-blur`}>
            <h4 className={`absolute w-[18rem] text-blue-900 text-md md:text-lg font-bold  bottom-4 ml-2`}>I excel at open project <br /> communications, team works and I prioritize client satisfaction</h4>
          </div>




          <div className={`flex flex-col w-full md:w-[38%] h-[20rem] justify-between gap-2`} >
            
            <div className={`w-full h-[9rem]  rounded-2xl bg-blur`}>
              <h4 className='text-md md:text-xl font-bold text-blue-900  mt-5 ml-2'>I am vast with frameworks, <br />as well as core Vanilla Javascript</h4>
            </div>



            <div className={`w-full flex  flex-row  h-[10rem] justify-between overflow-hidden  rounded-2xl bg-blur`}>
              
              <div className={`w-[48%] md:w-[48%]    flex flex-col justify-center `}>
                
                <p className='text-sm text-gray-400 ml-2'>I constantly try to  <br />improve</p>
                <h4 className='text-lg md:text-xl font-bold text-blue-900 ml-2'>My tech stack</h4>
              </div>



              <div className={`w-[45%] md:w-[48%] h-full  justify-end flex flex-wrap gap-2`}>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-white  text-[9px] md:text-xs font-bold bg-cyan-800`} >React.js</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[9px] md:text-xs font-bold bg-blue-100`} >Next Js</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[9px] md:text-xs font-bold bg-blue-100`} >Tailwind css</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[9px] md:text-xs font-bold bg-blue-100`} >Bootstrap</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[9px] md:text-xs font-bold bg-blue-100`} >Git</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[9px] md:text-xs font-bold bg-blue-100`} >Github</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[9px] md:text-xs font-bold bg-blue-100`} >Fire base</button>
                <button className={`w-[4rem] md:w-[5rem] h-8 rounded flex items-center justify-center text-[9px] md:text-xs font-bold bg-blue-100`} >react</button>

              </div>

            </div>

          </div>

        </div>





        <div className={`w-full flex justify-between flex-col md:flex-row `}>


          <div className={`flex flex-col w-full  md:w-[38%] h-[20rem] justify-between gap-2`} >
            
            <div className={`w-full h-[9rem]  rounded-2xl bg-blur`}>
              <h4 className='text-lg md:text-xl font-bold text-blue-900  m-4 mb-2 ml-2'>All skill-set</h4>
              
              
              
              <Scroll />

            </div>



            <div className={`w-full flex flex-col md:flex-row mb-4 md:mb-0  h-[10rem]  rounded-2xl`}>
             
              <div className={`w-full  h-full flex flex-col rounded-lg bg-blur`}>
                <h4 className='text-lg font bold text-blue-900 font-bold text-left  mt-4 ml-2'>Do you want to start a project together?</h4>
                <a  href='mailto:ayyubraji86@gmail.com' className='text-lg  mt-6 w-[7rem] text-center rounded px-2 py-2 font-bold text-blue-900 border border-blue-500 hover:border-blue-200 transition-all ease-in-out duration-500 flex items-center justify-center gap-2 '>Email <FaEnvelope /></a>
              </div>

            </div>

          </div>



          <div className={`relative w-full md:w-[60%] rounded-2xl h-[15rem] md:h-[20rem] bg-blur`}>
            <h4 className={`absolute left-4 bottom-4 font-bold text-md text-blue-900`}>Currently building <br /> My Portfolio Website</h4>
          </div>

        </div>





      </div>
 

       





       
      
  


    </div> 
  )
}

export default About
