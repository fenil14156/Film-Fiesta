import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer className='text-center  bg-neutral-900 bg-opacity-35 text-black py-2'>
       <div className='flex items-center justify-center gap-4'>
    <Link to="/">About</Link>
    <Link to="/">Contact</Link>
    </div>
    <p className='text-sm'>Create By Film Fiesta</p>
   </footer>
  )
}

export default Footer