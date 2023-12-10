import { Inter } from 'next/font/google'
import './globals.scss'

import { AiFillFacebook, AiFillLinkedin, AiFillInstagram, AiOutlineMenu  } from 'react-icons/ai';
import Link from 'next/link';
import Navbar from './components/nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vtec Solutions',
  description: 'Leading youths in tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <div className='header'>
          <div className='header-contacts bg-primary'>
            <div className='logo'>Vtec Solutions</div>
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
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#00344A" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,117.3C480,96,600,96,720,122.7C840,149,960,203,1080,213.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <footer className='h-80 w-full'>

        </footer>  
        
      </body>
    </html>
  )
}
