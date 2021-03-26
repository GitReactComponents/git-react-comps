import React, {useRef} from 'react'
import {useForm} from 'react-hook-form'
import {TextField} from '@material-ui/core'

import {createMuiTheme} from "@material-ui/core";
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';

import './SCSS/Subscribe.scss'



// TODO: Figure out how to change calendar colors


// const defaultMaterialTheme = createMuiTheme({
//   palette: {
//     main: 'red',
//     primary: 'red'
//   }
// })



const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#FFFFFF ',
    borderRadius: 3,
    border: 0,
    textEmphasisColor: 'white',
    height: 28,
    width: 155,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: 10,
    marginTop: 11
  },
  label: {
    textTransform: 'capitalize',
  },
});





function Subscribe(props) {
  const {register, handleSubmit, errors} = useForm()

  const classes= useStyles()

  const onSubmit = (data) => {
    console.log(data)
  }


  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };



  return (
    <dialog className='subscribe'>
      <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid-container'>

          <div className='form-control'>
            <label>First Name:</label>
            <input
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
            <label>Last Name:</label>
            <input
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
                  <label>Birthday:</label>




                  {/* <ThemeProvider theme={defaultMaterialTheme}> */}
                    <KeyboardDatePicker
                      classes={{
                        root: classes.root,
                        label: classes.label
                      }}
                      margin="normal"
                      id="date-picker-dialog"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                      />
                      {/* </ThemeProvider> */}



                </div>
              </Grid>
            </MuiPickersUtilsProvider>

          <div className='form-control'>
            <label>Email:</label>
            <input 
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
            <label>Username:</label>
            <input 
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
              <label>Password:</label>
              <input 
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
        </div>
          <div className='form-control'>
            <button type='submit' className='submit-btn' onClick={props.toggle}>Create Account</button>
          </div>
      </form>
    </dialog>
  )
}

export default Subscribe
