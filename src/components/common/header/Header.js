import React, { useState } from 'react'
import './Header.css'
import Top from '../header/top/Top'
import Middle from '../header/middle/Middle'
import Bottom from '../header/bottom/Bottom'

export default function Header() {

  const [ isAuthenticated, setIsAuthenticated ] = useState(false)
  
  return (
    <div className='complete-header'>
      <Top />
      <Middle isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
      <Bottom />
    </div>
  )
}
