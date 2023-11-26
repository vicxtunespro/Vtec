import Image from 'next/image'
import Card from './components/card'
import CardGroup from './components/cardGroup'

export default function Home() {
  return (
    <main className="min-h-screen px-16 md:px-32 lg:64">
      <CardGroup/>
    </main>
  )
}
