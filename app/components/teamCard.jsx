import React from 'react'
import { FaFacebook, FaLinkedin, FaWhatsapp} from "react-icons/fa";

function TeamMember({name, title, description, image}) {
  return (
    <div className='team-member mt-3'>
        <span className="team-member-photo">
            <img src='/ceo.jpg' alt='Team member'></img>
            <span className="media-handles">
            <FaFacebook />
            <FaLinkedin />
            <FaWhatsapp />
            </span>
        </span>
        <span className='flex flex-col justify-center items-center'>
            <p className="team-member-name text-xl font-bold text-center">{name}</p>
            <p className="team-title text-center">{title}</p>
            <p className='team-title-description text-sm font-light text-center'>{description}</p>
        </span>
    </div>
  )
}

export default TeamMember
