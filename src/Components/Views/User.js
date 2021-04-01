import React, {useState, useContext, useEffect} from 'react'
import {AuthContext} from '../../Context/AuthContext'
import './SCSS/User.scss'


function EditUser(props) {
  const userAuth = useContext(AuthContext)
  
  const [firstName, setFirst] = useState('')
  const [lastName, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    setFirst(userAuth.user.firstName)
    setLast(userAuth.user.lastName)
    setEmail(userAuth.user.email)
    setPassword(userAuth.user.password)
    },[props])

  const updateUser = (e) => {
    userAuth.updateUser(firstName, lastName, email, password, props.id)
  }
  
  return (
    <div id='edit-page'>
      <div className='user-info'>
        <h1>You can edit your user info here</h1>
          <label className='edit-title'>First Name</label>
          <input
            className='edit-input'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirst(e.target.value)}
            />
          <br />
            <label className='edit-title'>Last Name</label>
            <input
              className='edit-input'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLast(e.target.value)}
            />
          <br />
          <label>Email</label>
            <input
              disabled
              className='edit-input'
              placeholder={email}
              autoComplete='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />        <br />
            <label className='edit-title'>Password</label>
            <input
              className='edit-input'
              type='password'
              autoComplete='new-password'
              placeholder='Password: '
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          <br />
        <button className='update-user' onClick={() => updateUser()}>Update User</button>
      </div>
    </div>
  )
}


export default EditUser