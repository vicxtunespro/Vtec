import Image from 'next/image'
import React from 'react'

export default function Card({image, title, description, id}) {
  return (
    <div className='
    bg-white shadow-md rounded-md border overflow-hidden w-85 
    md:w-screen md:flex md:flew-row 
    lg:flex-col lg:w-80'>
        <div className='relative w-full md:w-1/2 lg:w-full h-60'>
            <Image
            src={image}
            fill
            objectFit='cover'
            ></Image>
        </div>
            <div className="p-4 flex flex-col">
                <span className="font-black text-2xl">{title}</span>
                <span className='mt-3 mb-3'>{description}</span>
                <button className='px-4 py-3 bg-blue-300 md:w-1/2 lg:w-full'> Read more </button>
            </div>
    </div>
  )
}
