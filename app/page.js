import Image from 'next/image'
import Card from './components/card'
import CardGroup from './components/cardGroup'
import Hero from './components/hero'
import Slider from './components/swiper'



export default function Home() {
  return (
      <div class="wrapper">
        <Hero/>
        <main className="min-h-screen px-8 md:px-16 lg:32">
          <CardGroup/>
          <Slider></Slider>
        </main>
      </div>
  )
}
