import React, {useState, useContext, useEffect} from 'react'
import {AuthContext} from '../../Context/AuthContext'

import './SCSS/User.scss'



function EditUser() {
  const userAuth = useContext(AuthContext)
  
  const [firstName, setFirst] = useState('')
  const [lastName, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    setFirst(userAuth.user.firstName)
    setLast(userAuth.user.lastName)
    setEmail(userAuth.user.email)
  }, [])

  const updateUser = (e) => {
    userAuth.updateUser(firstName, lastName, email, password, userAuth.user.userId)
  }
  


  return (
    <div className='user'>
      <div className='page-header-section'>
        <h1 className='page-header'>You can edit your user info here</h1>
      </div>

      <div className='user-edit-grid'>
        <section className='first title'>
          <label for='first-input'>First Name: </label>
        </section>
          <input
            className='first-input'
            placeholder={userAuth.user.firstName}
            value={firstName}
            onChange={(e) => setFirst(e.target.value)}
          />

          <section className='last title'>
            <label for='last-input'>Last Name: </label>
          </section>
            <input
              className='last-input'
              placeholder={userAuth.user.lastName}
              value={lastName}
              onChange={(e) => setLast(e.target.value)}
          />

          <section className='email title'>
            <label for='email-input'>Email: </label>
          </section>
            <input
              className='email-input'
              placeholder={userAuth.user.email}
              autoComplete='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />        
            
          <section className='password title'>
            <label for='password-input'>Password: </label>
          </section>
            <input
              className='password-input'
              type='password'
              placeholder='Password: '
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          <button 
            className='update-btn' 
            onClick={() => updateUser()}>
              Update User
          </button>
      </div>
    </div>
  )
}


export default EditUser