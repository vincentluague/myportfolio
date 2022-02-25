import React from 'react'
import SocialContact from '../../common/social-contact/index';
import './about.css'
function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
          Hello There 👋, I am
          <br /> <span className='info-name'> Vincent Luague </span>. 
          <br /> Full Stack Web Developer / Data Analyst 
          </div>
        <div className='about-photo'>
            <img src={require('../../../assets/vincentpic.png')} className='picture' alt='about-img'/>
        </div>
      </div>
     <SocialContact />
    </div>
  )
}

export default About;