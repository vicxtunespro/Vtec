import React from 'react'

export default function Hero() {
  return (
    <div className='w-screen h-1/2 bg-blue-100 pl-8 pr-8 pb-10 pt-24 flex flex-col justify-center items-center gap-8'>
        <h1 className='text-3xl font-bold text-center'>Grow your skill <br></br>with us</h1>
        <p class="text-center">Every youth out there got the ability to set an opportunity</p>
        <button className='py-3 x-5 w-32 bg-blue-400 text-white dark:text-white rounded'>Join now</button>
    </div>
  )
}
