import React, {useRef} from 'react'
import {useForm} from 'react-hook-form'


import './SCSS/Subscribe.scss'


function Subscribe() {
  const {register, handleSubmit, errors} = useForm()





  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <div className='subscribe'>
      <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-flex-container'>
          <div className='side info'>
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
            <div className='form-control'>
              <label>Birthday:</label>
              <input
                type='date' 
                name='birthday' 
                ref={register({
                  required: false
                })}
              />
            </div>
          </div>
<<<<<<< HEAD
          <div className='form-control'>
            <label>Username:</label>
            <input 
              type='text'
              name='username'
              ref={register({
                required: true,
                pattern: /^(?=.*[a-zA-Z]{3,})(?=.*[\d]{0,})[a-zA-Z0-9]{3,20}$/gi
              })}
            />
            {errors.username && errors.username.type === 'required' && (
              <p className='errorMsg'>How else you gonna log in silly?</p>
            )}
            {errors.username && errors.username.type === 'pattern' && (
              <p className='errorMsg'>Username must be 3-20 characters</p>
            )}
=======
          <div className='side account'>
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
                placeholder='Your login'
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
                <p className='errorMsg'><strong>Must Contain:</strong>1 uppercase letter,<br/>1 lowercase letter,<br/>1 number,<br/> and 1 special character.</p>
              )}
            </div>
>>>>>>> 53a648230b3498d0d62b2c42ee24cddf2e7e8573
          </div>
        </div>
          <div className='bottom'>
            <div className='form-control'>
            <button type='submit'>Create Account</button>
            </div>
          </div>
      </form>
    </div>
  )
}

export default Subscribe
