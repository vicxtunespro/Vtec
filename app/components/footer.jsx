import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineMenu  } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className='w-screen grid grid-cols-1 md:grid-cols-4'>
      <div class="logo-section flex flex-col justify-center items-start h-36">
        <Image src='/logo.png' alt="logo" width={100} height={100}></Image>
        <span className='flex text-white'>
          <AiFillFacebook/>
          <AiFillInstagram/>
          <AiFillLinkedin/>
        </span>
        <span>Location</span>
      </div>
      <div className='bg-red-300 pl-4'>
        <p className='font-semibold text-2xl'>Company</p>
        <ul>
          <li className='font- text-sm'>Home</li>
          <li className='font- text-sm'>About</li>
          <li className='font- text-sm'>Lorem ipsum dolor</li>
          <li className='font- text-sm'>Lorem ipsum dolor</li>
          <li className='font- text-sm'>Lorem ipsum dolor</li>
          <li className='font- text-sm'>Lorem ipsum dolor</li>
          <li className='font- text-sm'>Lorem ipsum dolor</li>
        </ul>
      </div>
      <div className='bg-red-700 pl-4'>
      <p className='text-2xl font-semi-bold'>Services</p>
      <ul>
          <li className='py-1'>Lorem ipsum dolor</li>
          <li className='py-1'>Lorem ipsum dolor</li>
          <li className='py-1'>Lorem ipsum dolor</li>
          <li className='py-1'>Lorem ipsum dolor</li>
          <li className='py-1'>Lorem ipsum dolor</li>
          <li className='py-1'>Lorem ipsum dolor</li>
          <li className='py-1'>Lorem ipsum dolor</li>
        </ul>
      </div>
      <div className='bg-red-600'>
        <p className='text-xl font-semi-bold'>Get in touch</p>
        <form className='flex gap-1 flex-col'>
          <input type="text" placeholder='Email'/>
          <textarea placeholder='enter message'></textarea>
        </form>
      </div>
      
    </footer> 
  )
}
