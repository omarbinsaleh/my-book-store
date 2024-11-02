import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10'>
      <h1 className='text-4xl md:text-7xl text-red-500 text-center'>Page Not Found...!  😕</h1>

      <Link to='/'><button className='btn'>Go to Home</button></Link>
    </div>
  )
}

export default NotFoundPage
