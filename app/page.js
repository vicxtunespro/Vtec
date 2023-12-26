import Image from 'next/image'
import Card from './components/card'
import CardGroup from './components/cardGroup'
import Hero from './components/hero'
<<<<<<< HEAD
import Team from './components/team'
=======
import ContentCard from './components/caption'
import { Alert } from 'flowbite-react'
>>>>>>> d5f28f5e9cc0af694fcb85df59af8ed5aa6aac90



export default function Home() {
  return (
      <div className="wrapper">
        <Hero/>
        <main className="min-h-screen px-8 md:px-16 lg:32 relative">
          <ContentCard/>
          <ContentCard/>
          <CardGroup/>
<<<<<<< HEAD
          <Team/>
=======
          <Alert>Flowbite is owsome</Alert>
>>>>>>> d5f28f5e9cc0af694fcb85df59af8ed5aa6aac90
        </main>
      </div>
  )
}
