import Image from 'next/image'
import { comment } from 'postcss'
import React from 'react'

export default function Card({image, title, description, id}) {
  return (
    <div className='
    bg-white shadow-md rounded-md border overflow-hidden min-w-72 flex-none'>
        <div className='relative w-full lg:w-full h-40'>
            <Image
            src={image}
            alt='service photo'
            fill
            objectFit='cover'
            ></Image>
        </div>
            <div className="p-4 flex flex-col relative">
                <span className="font-black text-1xl text-ellipsis overflow-hidden whitespace-nowrap dark:text-black">{title}</span>
                <span className='mt-3 mb-3 text-ellipsis line-clamp-1 overflow-hidden dark:text-black'>{description}</span>
                <button className='px-4 py-3 bg-blue-300 bottom-1 lg:w-full'> Read more </button>
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
