import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineMenu  } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className='w-screen  text-white flex flex-col relative border-b-2 border-solid  border-white'>
      <div class="logo-section flex justify-between w-full ">
        <Image src='/logo.png' alt="logo" width={100} height={100}></Image>
        <span className='flex text-white text-4xl justify-center items-center'>
          <AiFillFacebook/>
          <AiFillInstagram/>
          <AiFillLinkedin/>
        </span>
      </div>
      <div className="wrapper flex justify-between flex-col lg:flex-row">
        <div className="info flex w-full lg:justify-evenly lg:flex-row flex-wrap lg:w-3/4">
          <div className='p-4'>
            <p className='font-semibold text-2xl'>Company</p>
            <ul>
              <li><Link href="/" className='font- text-sm hover:text-md'>Home</Link></li>
              <li><Link href="/services" className='font- text-sm'>Services</Link></li>
              <li><Link href="/projects" className='font- text-sm'>Projects</Link></li>
              <li><Link href="/projects" className='font- text-sm'>Projects</Link></li>
              <li><Link href="/contact" className='font- text-sm'>Contact us</Link></li>
            </ul>
          </div>
          <div className='p-4'>
            <p className='font-semibold text-2xl'>Services</p>
            <ul>
              <li className='font- text-sm'>Graphic Design</li>
              <li className='font- text-sm'>Web development</li>
              <li className='font- text-sm'>Content management</li>
              <li className='font- text-sm'>Data Entery</li>
              <li className='font- text-sm'>Motion Graphics design</li>
              <li className='font- text-sm'>Online Tutoring</li>
              <li className='font- text-sm'>Programming</li>
            </ul>
          </div>
          <div className='p-4'>
            <p className='font-semibold text-2xl'>Online Courses</p>
            <ul>
              <li className='font- text-sm hover:text-md'>HTML Mastery class</li>
              <li className='font- text-sm hover:text-md'>CSS Mastery class</li>
              <li className='font- text-sm'>Javascript Development</li>
              <li className='font- text-sm'>MERN Stack development</li>
              <li className='font- text-sm'>Graphic Design</li>
              <li className='font- text-sm'>Principles of programming</li>
              <li className='font- text-sm'>Microsoft office suite</li>
              <li className='font- text-sm'>G-suite</li>
            </ul>
          </div>
          <div className='p-4'>
            <p className='font-semibold text-2xl'>Location</p>
            <ul>
              <li className='font- text-sm hover:text-md'>Home</li>
              <li className='font- text-sm'>Kitem</li>
              <li className='font- text-sm'>Kampala - Masaka Road</li>
              <li className='font- text-sm'>+256 758 019 072</li>
              <li className='font- text-sm'>+256 756 727 756</li>
            </ul>
          </div>
          
        </div>
        <div className= 'p-4 form w-full lg:w-1/4'>
          <p className='text-xl font-semi-bold'>Get in touch</p>
          <form className='flex gap-1 flex-col'>
            <input type="text" placeholder='Email'/>
            <textarea placeholder='Enter your message here'></textarea>
            <button className="bg-orange-300 hover:bg-orange-500" >Send a Message</button>
          </form>
        </div>
      </div>
      
    </footer> 
  )
}
