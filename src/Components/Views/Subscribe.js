import React, {useState, useContext} from 'react'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import {useForm, FormProvider} from 'react-hook-form'
import FormInput from '../Views/controls/input/index'

import {ThemeProvider} from '@material-ui/core'
import theme from '../../theme'
import Grid from '@material-ui/core/Grid';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';

import {AuthContext} from '../../Context/AuthContext'

import './SCSS/Subscribe.scss'


function Subscribe(props) {
  
  const userAuth = useContext(AuthContext)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState(new Date())
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const methods = useForm({})
  const {register, handleSubmit, errors} = methods

  

  const onSubmit = (data) => {
    console.log(data)
    // userAuth.register(firstName, lastName, birthday, email, userName, password)
    // setFirstName('')
    // setLastName('')
    // setBirthday('')
    // setEmail('')
    // setUserName('')
    // setPassword('')
  }






  const handleDateChange = (date) => {
    setBirthday(date);
  };


  return (
    <dialog className='subscribe'>
      <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid-container'>

          <ThemeProvider theme={theme}>
            <FormProvider {...methods}>

            <div className='form-control'>
              <h4>First Name:</h4>
              <FormInput
                autoFocus='true'
                inputRef={register} 
                name='firstName'
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                // ref={register({
                //   required: true,
                //   pattern: /^[a-zA-Z0-9]+$/
                // })}
                />
              {/* {errors.firstName && errors.firstName.type === 'required' && (
                <p className='errorMsg'>Name is required</p>
                )}
              {errors.firstName && errors.firstName.type === 'pattern' && (
                <p className='errorMsg'>Name must be alpha characters</p>
                )} */}
            </div>

            <div className='form-control'>
              <h4>Last Name:</h4>
              <FormInput
                inputRef={register} 
                name='lastName'
                type='text' 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
                // ref={register({
                //   required: true,
                //   pattern: /^[a-zA-Z0-9]+$/                  
                // })}
                />
              {/* {errors.lastName && errors.lastName.type === 'required' && (
                <p className='errorMsg'>Name is required</p>
                )}
              {errors.lastName && errors.lastName.type === 'pattern' && (
                <p className='errorMsg'>Name must be alpha characters</p>
                )} */}
            </div>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <div className='form-control'>
                  <h4>Birthday:</h4>
                    <KeyboardDatePicker
                      inputRef={register} 
                      name='birthday'
                      variant='dialog'
                      margin='none'
                      id="date-picker-dialog"
                      format="MM/dd/yyyy"
                      value={birthday}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                      />
                  </div>
                </Grid>
              </MuiPickersUtilsProvider>

              <div className='form-control'>
                <h4>Email:</h4>
                <FormInput
                  inputRef={register} 
                  name='email'
                  type='text' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // ref={register({
                  //   required: true,
                  //   pattern: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,14})?$/
                  // })} 
                  />
                {/* {errors.email && errors.email.type === "required" && (
                  <p className="errorMsg">Email is required.</p>
                  )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="errorMsg">Must enter a valid email.</p>
                )} */}
              </div>

              <div className='form-control'>
                <h4>Username:</h4>
                <FormInput
                  inputRef={register} 
                  name='username'
                  type='text'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder='3-20 alphanumeric'
                  // ref={register({
                  //   required: true,
                  //   pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/                  
                  // })}
                  />
                {/* {errors.username && errors.username.type === 'required' && (
                  <p className='errorMsg'>This will become your login</p>
                  )}
                {errors.username && errors.username.type === 'pattern' && (
                  <p className='errorMsg'>Username must be 3-20 characters<br/>Letters and Numbers</p>
                  )} */}
              </div>

              <div className='form-control'>
                <h4>Password:</h4>
                <FormInput
                  inputRef={register} 
                  name='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='1 of a, A, 1, !'
                  // ref={register({
                  //   required: true,
                  //   minLength: 6,
                  //   pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/
                  // })}
                  />
                {/* {errors.password && errors.password.type === "required" && (
                  <p className="errorMsg">Password is required.</p>
                  )}
                {errors.password && errors.password.type === "minLength" && (
                  <p className="errorMsg">
                    Password should be 8-20 characters.
                  </p>
                )}
                {errors.password && errors.password.type === "pattern" && (
                  <p className='errorMsg'>Must Contain:<br/> 1 uppercase letter,<br/>1 lowercase letter,<br/>1 number,<br/>1 special character.</p>
                  )} */}
              </div>
              </FormProvider>
            </ThemeProvider>
          </div>
            
          <div className='form-control'>
            <button type='submit' className='submit-btn' onClick={handleSubmit(onSubmit)}>Create Account</button>
          </div>

        </form>
    </dialog>
  )
}

export default Subscribe
