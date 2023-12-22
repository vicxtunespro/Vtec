import { Inter } from 'next/font/google'
import './globals.scss'


import Footer from './components/footer';
import Menu from './components/menu';
import Flowfooter from './components/flowfooter';

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
        {/* <Footer/>  */}
        <Flowfooter/>
      </body>
    </html>
  )
}
