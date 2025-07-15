import React from 'react'
// Anything imported from react router dom is not exported as default, so include curly braces
import {Link} from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <div className='video-section'>
      <video autoPlay muted loop className='background-video'>
        <source src={require('../../../videos/shop.mp4')}/>
        Your browser does not support the Video tag
      </video>
      <Link to='/shop' className='button'>EXPLORE</Link>
    </div>
  )
}
