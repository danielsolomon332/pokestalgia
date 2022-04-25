import React from 'react'
import { NavLink } from 'react-router-dom'
import './WrongURL.css'

const WrongURL = () => {
  return (
    <div className='wrong-url'>
      <h2>404 Error</h2>
      <p>That URL does not exist! Please click below to return to the main page</p>
      <NavLink to="/"><p>HOME</p></NavLink>
    </div>
  )
}

export default WrongURL
