import React, {useState, useContext} from 'react'
import {AuthContext} from '../../Context/AuthContext'

import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import './Login.scss'


const styles = {
  root: {
    background: "#f2f2f2",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 53
  },
  input: {
    color: "#000000",
    width: 170,
  }
};



function Login(props) {
  const {classes} = props

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
        <form className='login-form' onSubmit={handleLogin}>

          <div className='intro info'>
            <h3>Member Login</h3>
          </div>        


          
          <section className='input-fields'>
            <TextField
              autoFocus
              placeholder='Enter Username'
              type='text'
              className={classes.root}
              InputProps={{
                className: classes.input
              }}
              autoComplete='username'
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              />
            <TextField
              className='entry-text'
              type='password'
              className={classes.root}
              InputProps={{
                className: classes.input
              }}
              autoComplete='current-password'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </section>

            <button 
              className='login-btn' 
              type='submit'>
                Login
            </button>
        </form>

      </div>
    </dialog>
  )
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login)
