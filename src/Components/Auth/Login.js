import React, {useState, useContext} from 'react'
import {AuthContext} from '../../Context/AuthContext'

function Login() {
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const userAuth = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    userAuth.login(userName, password)
    setUsername('')
    setPassword('')
  }


  return (
    <div>
      <form id='login-container' onSubmit={handleLogin}>

        <div className='intro info'>
          <h3>Member Login</h3>
        </div>        

        <section>
          <input
            autoFocus
            className='entry-text'
            type='text'
            autoComplete='username'
            placeholder='Enter Username'
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className='entry-text'
            type='password'
            autoComplete='current-password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>

          <button 
            className='login-button' 
            type='submit'>
              Login
          </button>
      </form>
    </div>
  )
}

export default Login
