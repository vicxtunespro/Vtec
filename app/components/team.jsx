'use client'
import React from 'react'
import teamMembers from './webData/team';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import Member from './teamCard';
import TeamMember from './teamCard';


function Team(){
    return(
        <div className='team'>
            <h1 className='heading'>OUR TEAM</h1>
            <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper team-group">
                {
                    teamMembers.map((member)=>(
                        <SwiperSlide>
                            <TeamMember
                            key={member.id}
                            name={member.name}
                            title={member.title}
                            description={member.description}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Team;