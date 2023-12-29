"use client"
import React from 'react'
import Card from './card'
import services from './webData/services'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';


export default function CardGroup() {
  return (
    <div className="card-display">
      <p className="text-2xl font-bold mt-6 mb-6 w-full after:content-[''] after:w-20 after:h-[2px] after:bg-black after:block
      ">Services</p>
      <Swiper 
      watchSlidesProgress={true} 
      slidesPerView={4}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
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
      className="mySwiper flex justify-center items-center">
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
