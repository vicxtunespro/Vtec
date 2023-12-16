import React from 'react'
import Card from './card'
import services from './webData/services'


export default function CardGroup() {
  return (
    <div className="card-display">
      <div className='flex overflow-x-scroll gap-3 mt-4 snap-mandatory'>
          {services.map((service) => (
            <Card
            key={service.id}
            image={service.image}
            description={service.description}
            title={service.title}
            />
          ))}
      </div>
    </div>
  )
}
