
import Image from 'next/image'
import React from 'react'

export default function ContentCard() {
  return (
      <div className="w-full h-96 mt-3 mb-3 flex flex-col md:flex-row rounded shadow overflow-hidden">
        <div className="h-3/4 w-full lg:w-1/2 lg:h-full bg-orange-400 relative">
            <Image src="/meetup.jpg" alt="caption photo" fill objectFit='cover'></Image>

        </div>
        <div className='bg-primary text-white dark:text-white w-full lg:w-1/2 p-10 flex items-center justify-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a tenetur deserunt mollitia ducimus, molestiae delectus. Quas atque architecto exercitationem dolor nesciunt molestiae dolores nam. Itaque, quam. Nemo, inventore eos.
        </div>
      </div>
  )
}
