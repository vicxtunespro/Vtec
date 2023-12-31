'use client'
import React from 'react'
import teamMembers from './webData/team';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import Member from './teamCard';
import TeamMember from './teamCard';


function Team({imageUrl}){
    return(
        <div className='team mt-10'>
            <h1 className="heading after:content-[''] after:w-20 after:h-[2px] after:bg-black after:block">OUR TEAM</h1>
            <Swiper watchSlidesProgress={true}
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
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper team-group">
                {
                    teamMembers.map((member)=>(
                        <SwiperSlide>
                            <TeamMember
                            key={member.id}
                            name={member.name}
                            title={member.title}
                            description={member.description}
                            image={member.image}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Team;