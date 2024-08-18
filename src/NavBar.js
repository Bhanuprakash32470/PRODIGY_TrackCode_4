import React from 'react'
import { DiYeoman } from "react-icons/di";
import Link from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { SiPolymerproject } from "react-icons/si";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
export const NavBar = () => {
  return (
    <div className='fixed top-0 w-full'>
    <div className=' flex flex-cols text-white h-[50px] bg-[#021526]'>
       <nav className=''>
        <div  className="px-8">
          <DiYeoman className=' mx-6 my-5'/>
         <h1 className=" px-8 -my-10 mx-8 text-[#E2E2B6] ">Naga Bhanu Prakash</h1></div>
         
         <div className='flex flex-row  mx-[40rem]'>
      
        <ul className='flex px-6 py-4 gap-x-[5rem] '>
        <a href='#home' className='group relative my-6'><IoMdHome className=' group relative -mx-[1.5rem] -my-5'/>Home
          <span class="absolute bottom-0 -left-[1.3rem] h-1 bg-[#E2E2B6] rounded-md w-0 transition-all duration-300 ease-in-out group-hover:w-[4.0rem]"></span>
          </a >
          <a href="#aboutme" className='group relative my-6'><IoPersonSharp className='group relative -mx-[1.5rem] -my-5'/>Aboutme
          <span class="absolute bottom-0 -left-[1.5rem]  h-1 bg-[#E2E2B6] rounded-md w-0 transition-all duration-300 ease-in-out group-hover:w-[5.5rem]"></span>
          </a>
          <a href="#projects" className='group relative my-6'><SiPolymerproject className='group relative -mx-[1.5rem] -my-5'/>Projects
          <span class="absolute bottom-0 -left-[1.3rem]  h-1 bg-[#E2E2B6] rounded-md w-0 transition-all duration-300 ease-in-out group-hover:w-[4.8rem]"></span>
          </a>
          <a href="#contact" className='group relative my-6'><MdOutlineLocalPhone className='group relative -mx-[1.5rem] -my-5'/>Contact
          <span class="absolute bottom-0 -left-[1.1rem]  h-1 bg-[#E2E2B6] rounded-md w-0 transition-all duration-300 ease-in-out group-hover:w-[4.6rem]"></span>
          </a>
        </ul>
      </div>

       </nav>

    </div>
    </div>
  )
}
