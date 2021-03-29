import React, {useRef} from 'react'
import {useForm} from 'react-hook-form'

import {ThemeProvider, Button, TextField} from '@material-ui/core'
import theme from '../../theme'

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';

import './SCSS/Subscribe.scss'



// TODO: Figure out how to change calendar colors



function Subscribe(props) {
  const {register, handleSubmit, errors} = useForm()


  const onSubmit = (data) => {
    console.log(data)
  }


  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };







//  TODO: Resize subscribe modal

  return (
    <dialog className='subscribe'>
        <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid-container'>


            <ThemeProvider theme={theme}>
              <div className='form-control'>
                <h4>First Name:</h4>
                <TextField
                  autoFocus='true'
                  type='text' 
                  name='firstName' 
                  ref={register({
                    required: true,
                    pattern: /^[a-zA-Z0-9]+$/
                  })}
                  />
                {errors.firstName && errors.firstName.type === 'required' && (
                  <p className='errorMsg'>Name is required</p>
                  )}
                {errors.firstName && errors.firstName.type === 'pattern' && (
                  <p className='errorMsg'>Name must be alpha characters</p>
                  )}
              </div>

              <div className='form-control'>
                <h4>Last Name:</h4>
                <TextField
                  type='text' 
                  name='lastName' 
                  ref={register({
                    required: true,
                    pattern: /^[a-zA-Z0-9]+$/                  
                  })}
                  />
                {errors.lastName && errors.lastName.type === 'required' && (
                  <p className='errorMsg'>Name is required</p>
                  )}
                {errors.lastName && errors.lastName.type === 'pattern' && (
                  <p className='errorMsg'>Name must be alpha characters</p>
                  )}
              </div>


                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <div className='form-control'>
                      <h4>Birthday:</h4>
                        <KeyboardDatePicker
                            variant='dialog'
                            margin='none'
                            id="date-picker-dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
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
                <TextField
                  type='text' 
                  name='email' 
                  ref={register({
                    required: true,
                    pattern: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,14})?$/
                  })} 
                  />
                {errors.email && errors.email.type === "required" && (
                  <p className="errorMsg">Email is required.</p>
                  )}
                {errors.email && errors.email.type === "pattern" && (
                  <p className="errorMsg">Must enter a valid email.</p>
                  )}
              </div>

              <div className='form-control'>
                <h4>Username:</h4>
                <TextField
                  type='text'
                  name='username'
                  placeholder='3-20 alphanumeric'
                  ref={register({
                    required: true,
                    pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/                  
                  })}
                  />
                {errors.username && errors.username.type === 'required' && (
                  <p className='errorMsg'>This will become your login</p>
                  )}
                {errors.username && errors.username.type === 'pattern' && (
                  <p className='errorMsg'>Username must be 3-20 characters<br/>Letters and Numbers</p>
                  )}
              </div>

                <div className='form-control'>
                  <h4>Password:</h4>
                  <TextField
                    type='password'
                    name='password'
                    placeholder='May contain #_-@!?'
                    ref={register({
                      required: true,
                      minLength: 6,
                      pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/
                    })}
                    />
                  {errors.password && errors.password.type === "required" && (
                    <p className="errorMsg">Password is required.</p>
                    )}
                  {errors.password && errors.password.type === "minLength" && (
                    <p className="errorMsg">
                      Password should be 8-20 characters.
                    </p>
                  )}
                  {errors.password && errors.password.type === "pattern" && (
                    <p className='errorMsg'>Must Contain:<br/> 1 uppercase letter,<br/>1 lowercase letter,<br/>1 number,<br/>1 special character.</p>
                    )}
                </div>
              </ThemeProvider>
            </div>
            <div className='form-control'>
              <button type='submit' className='submit-btn' onClick={props.toggle}>Create Account</button>
            </div>
        </form>
    </dialog>
  )
}

export default Subscribe
