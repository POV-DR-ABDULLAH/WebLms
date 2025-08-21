import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
        <div className="flex flex-col md:flex-row items-start px-8 md:px0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
          <div className="flex flex-col md:items-start items-center w-full">
            <img src={assets.logo_dark} alt="logo" className="" />
            <p className="mt-6 text-center md:text-left text-sm text-white/80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quaerat at deleniti ipsum sunt inventore ipsa magnam ea possimus ex?</p>
          </div>
          <div className="flex flex-col md:items-start items-center w-full">
            <h2 className="font-semibold mb-5 text-white">Company</h2>
            <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
              <li className="text-sm text-white/80" href="#">Home</li>
              <li className="text-sm text-white/80" href="#">About</li>
              <li className="text-sm text-white/80" href="#">Courses</li>
              <li className="text-sm text-white/80" href="#">Contact</li>
            </ul>
          </div>
          <div className="hidden md:flex flex-col items-start w-full">
            <h2 className="font-semibold text-white mb-5">Subscrib to our newsletter</h2>
            <p className="text-sm text-white/80">Be the first to know about our new courses and updates.</p>
            <div className="flex items-center gap-2 pt-4">  
              <input 
                type="text" 
                placeholder="Enter your email" 
                className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-4 text-sm focus:ring-2 focus:ring-gray-400"
              />
              <button className="bg-blue-600 text-white w-24 h-9 rounded">Subscribe</button>
            </div>
          </div>
        </div>
        <p className="py-4 text-center text-xs md:text-sm text-white/60">Copyright 2025 &copy; Abdullah, All rights reserved</p>
    </footer>
  )
}

export default Footer