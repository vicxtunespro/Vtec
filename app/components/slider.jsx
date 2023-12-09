import React from 'react'


export default function slider() {
  return (
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
  )
}
