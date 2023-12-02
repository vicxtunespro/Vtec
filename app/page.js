import Image from 'next/image'
import Card from './components/card'
import CardGroup from './components/cardGroup'

export default function Home() {
  return (
      <main className="min-h-screen px-8 md:px-16 lg:32">
        <CardGroup/>
      </main>
  )
}
