import React, { useState } from 'react'
import './Registration.css'
import RegistrationCard from '../../components/cards/registrationcard/RegistrationCard'

export default function Registration() {

  const [ isLogIn, setIsLogIn ] = useState(false)
  
  return (
    <div
      style={{
        backgroundImage: `url(${require('../../images/registration-image.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        filter: 'brightness(95%)',
      }}

      className='registration d-flex align-items-center justify-content-center flex-column'
    >
      {isLogIn ? <h2 className='text-white'>LOGIN</h2> : <h2 className='text-white'>SIGN UP</h2>}
      <RegistrationCard isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
    </div>
  )
}
