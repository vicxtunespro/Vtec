"use client"
import React from 'react'
import Card from './card'
import services from './webData/services'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


export default function CardGroup() {
  return (
    <div className="card-display">
      <p className="text-xl font-bold ">Services</p>
      <Swiper 
      watchSlidesProgress={true} 
      slidesPerView={4}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }} 
      className="mySwiper">
          {services.map((service) => (
            <SwiperSlide>
              <Card
              key={service.id}
              image={service.image}
              description={service.description}
              title={service.title}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
