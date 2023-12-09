import React from 'react'
import Card from './card'
import services from './webData/services'


export default function CardGroup() {
  return (
    <div className="card-display">
      <div classsName="flex flex-col">
        <span className="access bg-blue-800 ">Quickly view services</span>
        <span className="access bg-blue-300">Quickly view services</span>
        <span className="access bg-blue-300">Quickly view services</span>
        
      </div>
      <div className='mt-3 mb-3 grid grid-cols-1 gap-1
        lg:grid-cols-3 overflow-x-hidden'>
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
