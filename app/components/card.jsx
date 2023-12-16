import Image from 'next/image'
import { comment } from 'postcss'
import React from 'react'

export default function Card({image, title, description, id}) {
  return (
    <div className='
    bg-white shadow-md rounded-md border overflow-hidden min-w-72 
    md:w-screen md:flex md:flew-row 
    lg:flex-col lg:min-w-80'>
        <div className='relative w-full md:w-1/2 lg:w-full h-40'>
            <Image
            src={image}
            fill
            objectFit='cover'
            ></Image>
        </div>
            <div className="p-4 flex flex-col relative">
                <span className="font-black text-1xl text-ellipsis overflow-hidden whitespace-nowrap">{title}</span>
                <span className='mt-3 mb-3 text-ellipsis line-clamp-2 overflow-hidden'>{description}</span>
                <button className='px-4 py-3 bg-blue-300 bottom-1 md:w-1/2 lg:w-full'> Read more </button>
            </div>
    </div>
  )
}

// .card-content {
//   padding: 15px;
//   overflow: hidden;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   white-space: normal;
//   text-overflow: ellipsis;
// }
