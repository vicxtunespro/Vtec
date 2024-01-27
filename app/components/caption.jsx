
import Image from 'next/image'
import React from 'react'
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'

export default function ContentCard() {
  return (
      <div className="w-full h-1/2 mt-3 mb-3 flex flex-col md:flex-row rounded shadow overflow-hidden">
        <div className="h-72 w-full lg:w-1/2 lg:h-full bg-orange-400 relative">
            <Image src="/meetup.jpg" alt="caption photo" fill objectFit='cover'></Image>

        </div>
        <div className='bg-blue-10 text-black dark:text-white w-full lg:w-1/2 p-10 flex flex-col gap-4'>
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a tenetur deserunt mollitia ducimus, molestiae delectus. Quas atque architecto exercitationem dolor nesciunt molestiae dolores nam. Itaque, quam. Nemo, inventore eos.</p>
            <button class="bg-blue-950 py-4 px-4 flex gap-2 justify-center items-center text-white">Join our Whatsapp group <FaWhatsapp/></button>
        </div>
      </div>
  )
}
