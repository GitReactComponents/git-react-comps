import React from 'react'
import {useForm} from 'react-hook-form'

import './SCSS/Subscribe.scss'


function Subscribe() {
  const {register, handleSubmit, errors} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

// TODO: Need to complete regex on form below
  return (
    <div className='subscribe'>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-control'>
            <label>Your Name:</label>
            <input
              type='text' 
              name='fullName' 
              ref={register({
                required: true,
                pattern: /^[a-zA-Z]+ [a-zA-Z]+$/gi
              })}
            />
            {errors.fullName && errors.fullName.type === 'required' && (
              <p className='errorMsg'>Name is required</p>
            )}
            {errors.fullName && errors.fullName.type === 'pattern' && (
              <p className='errorMsg'>Name must be alpha characters</p>
            )}
          </div>
          <div className='form-control'>
            <label>Username:</label>
            <input 
              type='text'
              name='username'
              ref={register({
                required: true,
                pattern: /^(?=.*[a-zA-Z]{3,})(?=.*[\d]{0,})[a-zA-Z0-9]{3,15}$/gi
              })}
            />
            {errors.username && errors.username.type === 'required' && (
              <p className='errorMsg'>How else you gonna log in silly?</p>
            )}
            {errors.username && errors.username.type === 'pattern' && (
              <p className='errorMsg'>Username must be 3-15 characters</p>
            )}
          </div>
          <div className='form-control'>
            <label>Email:</label>
            <input 
              type='text' 
              name='email' 
              ref={register({
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi
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
            <label>Password:</label>
            <input 
              type='password'
              name='password'
              ref={register({
                required: true,
                minLength: 6
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <p className="errorMsg">Password is required.</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="errorMsg">
                Password should be at least 6 characters.
              </p>
            )}
          </div>
          <div className='form-control'>
            <label></label>
          <button type='submit'>Create Account</button>
        </div>
      </form>
    </div>
  )
}

export default Subscribe
