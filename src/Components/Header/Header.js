import React, {useContext, useState} from 'react'

import './Header.scss'

function Header(props) {
  // const userAuth = useContext(AuthContext)

  // const handleLogout = () => {
  //   userAuth.logout()
  // }


  const inHeader = () => {
    return (
      <div className='in-container'>

          <div className='logo'></div>

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