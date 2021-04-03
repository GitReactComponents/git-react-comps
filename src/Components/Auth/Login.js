import React, {useState, useContext} from 'react'
import {AuthContext} from '../../Context/AuthContext'

import {useForm, FormProvider} from 'react-hook-form'
import FormInput from '../Views/inputController/index'

import {ThemeProvider} from '@material-ui/core'
import theme from '../../theme'

import './Login.scss'


function Login() {
  const userAuth = useContext(AuthContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  
  const methods = useForm({
    criteriaMode: 'all'
  });
  
  const {register, handleSubmit, errors} = methods;



  const onSubmit = (data) => {
    userAuth.login(data.username, data.password)
  }


  return (
    <dialog className='login'>
      <div id='login-container'>
        <h3>Member Login</h3>
      <br />

        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
          <ThemeProvider theme={theme}>
            <FormProvider {...methods}>
              <section>
                <FormInput
                  autoFocus={true}
                  name='username'
                  placeholder='Enter Username'
                  type='text'
                  autoComplete='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  inputRef={register}
                />
              </section>

              <br />

              <section>
                <FormInput
                name='password'
                className='entry-text'
                type='password'
                autoComplete='current-password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                inputRef={register}
              />
              </section>
            </FormProvider>
          </ThemeProvider>

          <br />

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

export default Login
