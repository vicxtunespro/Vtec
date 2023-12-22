import Image from 'next/image'
import Card from './components/card'
import CardGroup from './components/cardGroup'
import Hero from './components/hero'
import ContentCard from './components/caption'
import { Alert } from 'flowbite-react'



export default function Home() {
  return (
      <div className="wrapper">
        <Hero/>
        <main className="min-h-screen px-8 md:px-16 lg:32 relative">
          <ContentCard/>
          <ContentCard/>
          <CardGroup/>
          <Alert>Flowbite is owsome</Alert>
        </main>
      </div>
  )
}
