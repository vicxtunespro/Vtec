import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineMenu  } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className='w-screen flex flex-col gap-2'>
      
      <div className="quick-info flex gap-4">
      <div className='text-white'>
          <h1 className='text-xl pb-2 font-semibold'>Company</h1>
          <div className='flex flex-col gap-3 font-light'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About us</Link>
            <Link href='/services'>E-learning</Link>
            <Link href='/ebook'>E-books</Link>
            <Link href='/contact'>Contact us</Link>
            <Link href='/gallery'>Gallery</Link>
        </div>
        </div>
        <div className='text-white'>
          <h1 className='text-xl pb-2 font-semibold'>Services</h1>
          <ul className='flex flex-wrap flex-col gap-2 font-light'>
            <li>Custom Software Development</li>
            <li>Web Application Development</li>
            <li>Mobile App Development</li>
            <li>Cloud Computing Solutions</li>
            <li>IT Consulting Services</li>
            <li>Cybersecurity Solutions</li>
            <li>Database Management</li>
            <li>Network Design and Implementation</li>
            <li>IT Support and Maintenance</li>
            <li>Digital Transformation Services</li>
        </ul>
        </div>
        <div className='text-white'>
          <h1 className='text-xl pb-2 font-semibold'>Customers</h1>
          <ul className='flex flex-wrap flex-col gap-2 font-light'>
            <li>Custom Software Development</li>
            <li>Web Application Development</li>
            <li>Mobile App Development</li>
            <li>Cloud Computing Solutions</li>
            <li>IT Consulting Services</li>
            <li>Cybersecurity Solutions</li>
            <li>Database Management</li>
            <li>Network Design and Implementation</li>
            <li>IT Support and Maintenance</li>
            <li>Digital Transformation Services</li>
        </ul>
        </div>
      </div>
      <div class="icons flex w-screen justify-center mb-3">
        <AiFillFacebook className='icon'/>
        <AiFillInstagram className='icon'/>
        <AiFillLinkedin className='icon'/>
      </div>
      <div class="icons flex w-fill justify-center mb-3">
        <Image src='/logo.png' width={100} height={50}></Image>
      </div>
    </footer> 
  )
}
