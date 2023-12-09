import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className='w-screen hero flex flex-wrap  p-2  lg:pl-40'>
        <div class="flex flex-col justify-center items-center gap-2 text-center w-screen mt-10 md:mt-0 sm:w-1/2">
          <p class="text-white text-2xl font-black lg:text-4xl ">Lets build the future together!</p>
          <p class="text-white text-sm">Hurry and join our community now!</p>
          <Link href="/" class="py-2 px-3 w-40 text-center text-white bg-orange-300 rounded">Join now</Link>
        </div>
        <div class="flex flex-col justify-center relative h-fill w-fill sm:w-1/2">
          <Image src="/hero1.png" width={600} height={600} alt="hero photo">
          </Image>
        </div>
    </div>
  )
}
