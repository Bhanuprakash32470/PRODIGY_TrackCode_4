import React from 'react'
import photo from "./photos/int.jpg"
import profs from "./photos/img.jpeg"

export const Home = () => {
  return (
    <div id='home' class="flex flex-row h-[30rem] ">
        <div className='w-[60%] my-[5rem] mx-[5rem]'>
            <h1 className='text-[#E2E2B6] text-[5rem]'>Welcome!</h1>
            <h1 className='text-white text-[3rem]'>I'M</h1>
            <h1 className='text-[#E2E2B6] text-[3rem] mx-[7rem] -my-[4.5rem]'> E.Naga Bhanu Prakash</h1>
            <span >
              
            </span>
        </div>
        <div className='w-[40%] '>
        <img src={profs} className='h-[15rem] my-[5rem]'/>

        </div>
    </div>
  )
}
