import React from 'react'

export default function Mission() {
  return (
    <div className='w-full text-center pt-12'>
        <p className='font-bold text mb-8'>Our Mission is Succinctly Captured in Three Parts</p>
        <div className="mission-parts flex flex-col md:flex-row gap-8">
            <div className='flex flex-col items-center p-8 gap-2'>
                <span className="icon w-16 h-16 bg-orange-400 rounded-full"></span>
                <p className='text-center text-xl font-semibold'>Mission 1</p>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis! Voluptatem voluptates earum quam ratione</p>
            </div>
            <div className='flex flex-col items-center p-8 gap-2'>
                <span className="icon w-16 h-16 bg-orange-400 rounded-full"></span>
                <p className='text-center text-xl font-semibold'>Mission 1</p>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis! Voluptatem voluptates earum quam ratione</p>
            </div>
            <div className='flex flex-col items-center p-8 gap-2'>
                <span className="icon w-16 h-16 bg-orange-400 rounded-full"></span>
                <p className='text-center text-xl font-semibold'>Mission 1</p>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis! Voluptatem voluptates earum quam ratione</p>
            </div>  
        </div>
       
    </div>
  )
}
