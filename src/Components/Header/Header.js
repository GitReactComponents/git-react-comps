import React, {useContext, useEffect} from 'react'
import {AuthContext} from '../../Context/AuthContext'
import {Link} from 'react-router-dom'
import Button from './Button'


import './Header.scss'

function Header(props) {
  const userAuth = useContext(AuthContext)

  useEffect(() => {
    userAuth.getUser()
  }, [])


  const handleLogout = () => {
    userAuth.logout()
  }


  const inHeader = () => {
    return (
      <nav id='in-container'>
      
        <Link to='/'>
            <img className='logo' src='/img/logo.png' alt='Git-React-Comps Logo' />
        </Link>

        <div className='navbar'>
          <Link to='/' className='nav-link'>Home</Link>
          <Link to='/about' className='nav-link'>About</Link>

          <div className='subnav'>
            <button className='subnavbtn'><span>Options </span> 
              <i className='fa fa-caret-down'></i>
            </button>

            <div className='subnav-content'>
              <Link to='/user'>Edit User</Link>
              <Link to='/upload'>Upload Comps</Link>
              <Link to='/favorites'>Your Favorites</Link>
            </div>
          </div>

          <Link to='/contact' className='nav-link'>Contact Us</Link>

        </div>
      
        <section className='header-btn-container'>
          <button
            className='logout-btn'
            type='submit'
            onClick={handleLogout}
          >
            Logout
          </button>
        </section>
      </nav>
    )}



    const outHeader = () => {
      return (
        <div id='out-container'>
          <div className='intro'>
            <h3>Welcome to</h3>
          </div>

          <Link to='/'>
            <img className='logo' src='/img/logo.png' alt='Git-React-Comps Logo' />
          </Link>
          <div className='navbar'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='/contact' className='nav-link'>Contact Us</Link>
          </div>

          <section className='header-btn-container'>
            <Button />
          </section>
        </div>
      )
    }



  return (
    <header className='main-header'>
      {
        userAuth.user 
          ? inHeader() 
          : outHeader()
      }
    </header>
  )
}

export default Header