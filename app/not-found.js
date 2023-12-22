import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
      <Link href="/">
      <div className="w-screen h-screen flex justify-center items-center">
      <Image src="/404.png" alt='page not found' width={500} height={400}></Image>
      </div>
      </Link>
  )
}
