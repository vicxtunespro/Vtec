import Image from 'next/image'
import Card from './components/card'
import CardGroup from './components/cardGroup'
import Hero from './components/hero'
import Team from './components/team'



export default function Home() {
  return (
      <div class="wrapper">
        <Hero/>
        <main className="min-h-screen px-8 md:px-16 lg:32">
          <CardGroup/>
          <Team/>
        </main>
      </div>
  )
}
