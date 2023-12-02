import React from 'react'
import Card from './card'


export default function CardGroup() {
  return (
    <div className='mt-3 mb-3 grid grid-cols-1 gap-1 
      lg:grid-cols-3 overflow-x-hidden'>

        <Card/>
        <Card/>
        <Card/>
        <Card/>

    </div>
  )
}
