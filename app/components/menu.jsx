import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineMenu  } from 'react-icons/ai';
import Navbar from './nav';


export default function Menu() {
  return (
    <div className='header'>
          <div className='header-contacts bg-primary'>
            <div className='logo'>
              <Image src='/logo.png' alt='logo' width={50} height={40}></Image>
            </div>
            <div className='social-media'>
            <p className='contacts'>vtecsolutions256@gmail.com</p>
              <div class="icons">
                <AiFillFacebook className='icon'/>
                <AiFillInstagram className='icon'/>
                <AiFillLinkedin className='icon'/>
              </div>
            </div>
          </div>
          <Navbar/>
          <div className='navbar desktop=menu bg-last'>
            <div className='menu-icon'>
            <AiOutlineMenu/>
            </div>
            <nav>
              <Link href="/" className='page-link'>Home</Link>
              {/* Drop-down */}
              <div class="dropdown">
                <Link href="#" className='page-link droper'>Services</Link>
                  <div className='dropdown-content'>
                  <Link href="#" className='page-link'>Web Services</Link>
                  <Link href="#" className='page-link'>Graphics Design</Link>
                  <Link href="#" className='page-link'>E-learning Services</Link>
                  </div>
              </div>
              <Link href="/projects" className='page-link'>Projects</Link>
              <Link href="/about" className='page-link'>About us</Link>
              <Link href="/contact" className='page-link'>Contact us</Link>
            </nav>
          </div>
        </div>
  )
}
