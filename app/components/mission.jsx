import React from 'react'
import { FaBookReader } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";

export default function Mission() {
  return (
    <div className='w-full text-center pt-12'>
        <p className='font-bold text mb-4 text-blue-900'>Our Mission is Succinctly Captured in Three Parts</p>
        <div className="mission-parts flex flex-col md:flex-row gap-8">
            <div className='flex flex-col items-center p-8 gap-2'>
                <span className="icon w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white text-3xl"><FaBookReader/></span>
                <p className='text-center text-xl font-semibold'>Mission 1</p>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis! Voluptatem voluptates earum quam ratione</p>
            </div>
            <div className='flex flex-col items-center p-8 gap-2'>
                <span className="icon w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white text-3xl"><IoSettings/></span>
                <p className='text-center text-xl font-semibold'>Mission 2</p>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis! Voluptatem voluptates earum quam ratione</p>
            </div>
            <div className='flex flex-col items-center p-8 gap-2'>
                <span className="icon w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white text-3xl"><FaLightbulb/></span>
                <p className='text-center text-xl font-semibold'>Mission 3</p>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis! Voluptatem voluptates earum quam ratione</p>
            </div>
        </div>
       
    </div>
  )
}
