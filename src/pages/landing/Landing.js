import React, { useEffect } from 'react'
import './Landing.css'
import Hero from '../../components/sections/hero/Hero'
import { useNavigate } from 'react-router-dom'

export default function Landing() {

  // use the navigate router to navigate to small screens
  const navigate = useNavigate()

  // useEffect to watch out for the screen that the user is on
  useEffect(() => {
    window.addEventListener('resize', () => {

      // store he condition is a variable
      const isPhone = window.innerWidth < 768
      // condition to check which screen the user is on
      if (isPhone) {
        //navigate to the shop page
        navigate('/shop') // Navigate to the shop page
      }

    })

    // store he condition is a variable
    const isPhone = window.innerWidth < 768
    // condition to check which screen the user is on
    if (isPhone) {
      //navigate to the shop page
      navigate('/shop') // Navigate to the shop page
    }
 
  }, [navigate]) // Dependency array to check which screen the user is in

  return (
    <div>
      <Hero />
    </div>
  )
}
