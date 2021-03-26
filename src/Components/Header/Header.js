import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'


import './Header.scss'

function Header(props) {
  // const userAuth = useContext(AuthContext)

  // const handleLogout = () => {
  //   userAuth.logout()
  // }


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
          <Button />
        </section>
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
    <header className='main-header'>
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