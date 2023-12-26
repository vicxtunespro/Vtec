import React from 'react'
import { FaFacebook, FaLinkedin, FaWhatsapp} from "react-icons/fa";

function TeamMember({name, title, description, image}) {
  return (
    <div className='team-member'>
        <span className="team-member-photo">
            <img src='/ceo.jpg' alt='Team member'></img>
            <span className="media-handles">
            <FaFacebook />
            <FaLinkedin />
            <FaWhatsapp />
            </span>
        </span>
        <span>
            <p className="team-member-name">{name}</p>
            <p className="team-title">{title}</p>
            <p className='team-title-description'>{description}</p>
        </span>
    </div>
  )
}

export default TeamMember