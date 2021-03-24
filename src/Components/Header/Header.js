import React, {useContext, useState} from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown'
import {useSpring, animated as a} from 'react-spring'


import './Header.scss'

function Header(props) {
  // const userAuth = useContext(AuthContext)
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [slide, setSlide] = useState(false)

  const [modal, setModal] = useState(false)

  const displayProps = useSpring({
    opacity: click ? 1 : 0,
    marginTop: click ? 0 : -500
  })






  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)



  const onMouseEnter = () => {
    if(window.innerWidth < 960){
      setDropdown(false)
    }else{
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if(window.innerWidth < 960){
      setDropdown(false)
    }else{
      setDropdown(false)
    }
  }

  const toggleSlide = () => {
    setSlide(true)
  }

  // const handleLogout = () => {
  //   userAuth.logout()
  // }


  const inHeader = () => {
    return (
      <nav id='in-container'>
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
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
        </ul>
        <Button onClick={displayProps} click={click} />
      </nav>
    )}

          // <button
          //   className='logout-btn'
          //   type='submit'
          //   // onClick={handleLogout}
          // >
          //   Logout
          // </button>


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
    <header className='navbar'>
      {inHeader()}
      {/* {!userAuth.user &&
        outHeader()
      }
      {userAuth.user &&
        inHeader()
      } */}
    </header>
  )
}

export default Header