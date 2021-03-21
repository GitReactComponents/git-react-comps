import React, {useContext, useState} from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown'

import './Header.scss'
// import logo from '/img/logo.png'

function Header(props) {
  // const userAuth = useContext(AuthContext)
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // const handleLogout = () => {
  //   userAuth.logout()
  // }


  const inHeader = () => {
    return (
      <div className='in-container'>
        <Link to='/' className='header-logo'>
          <img className='logo' src='/img/logo.png' alt='Logo' />
        </Link> 
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>          
          <li className='nav-item'>
            <Link to='/user' className='nav-links' onClick={closeMobileMenu}>
              User
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>    
          <li className='nav-item'>
            <Link to='/subscribe' className='nav-links' onClick={closeMobileMenu}>
              Become a Member!
            </Link>
          </li>    
        </ul>
        <Button />
          <button
            className='logout-btn'
            type='submit'
            // onClick={handleLogout}
          >
            Logout
          </button>

      </div>
    )}



    const outHeader = () => {
      return (
        <div className='out-container'>
          <div className='intro'>
            <h3>Welcome to</h3>
            <h2 className='logo'>logo</h2>
          </div>
        </div>
      )
    }



  return (
    <div id='header'>
      {inHeader()}
      {/* {!userAuth.user &&
        outHeader()
      }
      {userAuth.user &&
        inHeader()
      } */}
    </div>
  )
}

export default Header