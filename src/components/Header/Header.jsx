import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='shadow-lg flex items-center justify-evenly backdrop-blur-3xl z-10 sticky top-0 left-0'>
      <Navbar/>
    </header>
  )
}

export default Header
