import React from 'react'
import './Button.scss'
import {Link} from 'react-router-dom'


function Button() {
  return (
    <div>
      <Link to='subscribe'>
        <button className='btn'>Become a Member!</button>
      </Link>
    </div>
  )
}

export default Button
