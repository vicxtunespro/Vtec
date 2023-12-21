import { Inter } from 'next/font/google'
import './globals.scss'


import Footer from './components/footer';
import Menu from './components/menu';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vtec Solutions',
  description: 'Leading youths in tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu/>
        
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#00344A" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,117.3C480,96,600,96,720,122.7C840,149,960,203,1080,213.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <Footer/> 
      </body>
    </html>
  )
}
