import React, {useState} from 'react'
import './Button.scss'
import {Link} from 'react-router-dom'

// TODO: Finish slide motion

function Button() {

  const [click, setClick] = useState(false)

  return (
    <div className={click ? 'reg-page active' : 'reg-page'}>
      <Link to='subscribe'>
        <button className='btn'>Become a Member!</button>
      </Link>
    </div>
  )
}

export default Button
