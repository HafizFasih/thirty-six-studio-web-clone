import React from 'react'
import { PiDotsThree } from "react-icons/pi";
const Navbar = ({color}: {color: boolean}) => {
  return (
    <nav className={`h-12 w-full border-b ${color ? "border-black" : "border-gray-300"} flex items-center justify-between px-2 capitalize tracking-tighter`}>
        <h2>thirtysixstudio</h2>
        <span></span>
        <ul className='flex h-full'>
          {["What we do", "Who we are", "How we give back", "Talk to us"].map((val, ind) => (
            <li key={ind} className='mx-4 flex items-center justify-center'>{val}</li>
          ))}
        </ul>
        <span className={`h-8 w-8 rounded-full border ${color ? "border-black" : "border-gray-300"} flex items-center justify-center`}>
        <PiDotsThree className='h-4/5 w-4/5'/>
        </span>
    </nav>
  )
}

export default Navbar
