import React from 'react'
import pic from './photos/int.jpg'
import { ImPointRight } from "react-icons/im";
export const Knowmore = () => {
  return (
    <div className='flex flex-rows '>
<div className=''>
    <h1 className='text-white mx-[15rem] text-[2.5rem] font-serif '>Know More <span className='text-[#E2E2B6]'>About Me</span></h1>
   <div className='mx-[10rem] w-[40%]'>
   <p className='text-white text-[1.7rem]'>
  
   I’m a passionate web developer who loves diving into code and continuously learning new tools and techniques. I thrive on solving creative challenges and building user-friendly solutions. Collaboration with others and engaging with the developer community keep me inspired, while I maintain a balanced life to fuel my ongoing passion.




   

        <div className=''>
        <h1><ImPointRight className='text-[#E2E2B6] my-[2rem]'/><span className=' absolute mx-9 -my-[4.3rem]'>Exploring new languages or building personal projects.</span></h1>
        <h1><ImPointRight className='text-[#E2E2B6] my-[2rem]'/><span className=' absolute mx-9 -my-[4.1rem]'>Attending tech talks and networking events.</span></h1>
       <h1><ImPointRight className='text-[#E2E2B6] my-[2rem]'/> <span className=' absolute mx-9 -my-[4rem]'> Diving into tech blogs, books, or research papers.</span></h1>
        </div>
        
        
    </p>
   </div>
    

</div>
<div className='w-[60%] h-[20rem]'>
    <img src={pic} className='h-[25rem] w-[70rem] my-[5rem] -mx-[12rem]'></img>

</div>

    </div>
  )
}
