import React, {useState, useContext, useEffect} from 'react'
import {AuthContext} from '../../Context/AuthContext'
import {TextField} from '@material-ui/core'
import './SCSS/User.scss'


function EditUser() {
  const userAuth = useContext(AuthContext)
  console.log(userAuth.user)
  
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
      <div className='user-info'>

        <h1 className='page-title'>You can edit your user info here</h1>
      </div>

      <div className='user-edit-grid'>

          <section className='first title'>
            <label>First Name: </label>
          </section>
            <input
              className='first-input'
              placeholder={userAuth.user.firstName}
              value={firstName}
              onChange={(e) => setFirst(e.target.value)}
            />

          <br />

          <section className='last title'>
            <label>Last Name: </label>
          </section>
            <input
              className='last-input'
              placeholder={userAuth.user.lastName}
              value={lastName}
              onChange={(e) => setLast(e.target.value)}
            />
          
          <br />

          <section className='email title'>
            <label>Email: </label>
          </section>
              <input
                className='email-input'
                placeholder={userAuth.user.email}
                autoComplete='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />        

          <br />
            
          <section className='password title'>
            <label>Password: </label>
          </section>
            <input
              className='password-input'
              type='password'
              placeholder='Password: '
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

        <br />

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