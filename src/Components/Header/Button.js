import React, {useState} from 'react'

// import Modal from '../Modal/Modal'


import './Button.scss'

// TODO: Finish slide motion

function Button(props) {
 
  console.log(props)


  return (
    // <div className={click ? 'reg-page active' : 'reg-page'}>
    <div className='reg-container'>
      <div className='btn-container'>
        <button className='btn' onClick={props.onClick}>
          Become a Member!
        </button>
      </div>
      
    </div>
  )
}

export default Button
