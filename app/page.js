import Image from 'next/image'
import Card from './components/card'
import CardGroup from './components/cardGroup'
import Hero from './components/hero'
import Team from './components/team'
import ContentCard from './components/caption'



export default function Home() {
  return (
      <div className="wrapper h-screen w-screen bg-slate-50 dark:bg-slate-900">
        <Hero/>
        <main className="min-h-screen px-8 md:px-16 lg:32 relative">
          <ContentCard/>
          <ContentCard/>
          <CardGroup/>
          <Team/>
       </main>
      </div>
  )
}