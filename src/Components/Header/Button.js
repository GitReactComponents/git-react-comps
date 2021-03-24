import React, {useState} from 'react'
import Subscribe from '../Views/Subscribe'
// import Modal from '../Modal/Modal'


import './Button.scss'

// TODO: Finish slide motion

function Button(props) {



  return (
    // <div className={click ? 'reg-page active' : 'reg-page'}>
    <div className='reg-container'>
      <div className='btn-container'>
        <button className='btn' onClick={props.displayProps}>
          Become a Member!
        </button>
      </div>
      {
        props.click && (
          <Subscribe />
        )
      }
    </div>
  )
}

export default Button
