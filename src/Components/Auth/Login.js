import React, {useState, useContext} from 'react'
import {AuthContext} from '../../Context/AuthContext'

import {ThemeProvider, TextField} from '@material-ui/core'
import theme from '../../theme'

import './Login.scss'


// const styles = {
//   root: {
//     background: "#f2f2f2",
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 53
//   },
//   input: {
//     color: "#000000",
//     width: 170,
//   }
// };



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
    <dialog className='login'>
      <div id='login-container'>

        <h3>Member Login</h3>

          <form className='login-form' onSubmit={handleLogin}>

            <ThemeProvider theme={theme} className='input-fields'>
              <section>
                <TextField
                  autoFocus
                  placeholder='Enter Username'
                  type='text'
                  autoComplete='username'
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </section>
            <br />
              <section>
                <TextField
                className='entry-text'
                type='password'
                autoComplete='current-password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              </section>
            </ThemeProvider>
        </form>

            <button 
              className='login-btn' 
              type='submit'>
                Login
            </button>

      </div>
    </dialog>
  )
}

// Login.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Login
