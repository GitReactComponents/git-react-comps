import React, {useState} from 'react'
import Subscribe from '../Views/Subscribe'
import Login from '../Auth/Login'

import {Slide} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import './Button.scss'



const useLoginStyles = makeStyles((theme) => ({
  button: {
    height: '130px',
    width: '15vw',
    position: 'absolute',
    top: '2%',
    right: '1%',
  },
  wrapper: {
    width: 180 + theme.spacing(1.5),
  },
  modalSpace: {
    width: '20vw',
    height: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
}))



const useRegStyles = makeStyles((theme) => ({
  button: {
    maxHeight: '100px',
    width: '15vw',
    position: 'absolute',
    top: '9%',
    right: '1%',
  },
  wrapper: {
    width: 180 + theme.spacing(1.5),
  },
  modalSpace: {
    width: 50,
    height: 750,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))


function Button(props) {
  const [loginModal, setLoginModal] = useState(false)
  const [regModal, setRegModal] = useState(false)

  const loginClasses = useLoginStyles()
  const regClasses = useRegStyles()


  const handleLoginModal = () => {
    setLoginModal((modal) => !modal)
  }

  const handleRegModal = () => {
    setRegModal((modal) => !modal)
  }


  const clickAway = () => {
    setLoginModal(false)
    setRegModal(false)
  }




  return (
    <ClickAwayListener onClickAway={clickAway}>
      <section>
        <div className={loginClasses.button}>
          <button 
            className='btn dark-btn' 
            onClick={() => handleLoginModal()}
            disabled={regModal ? true : false}
          >
            Login
          </button>
          <div className={loginClasses.wrapper}>
            <Slide direction="left" in={loginModal} timeout={500} mountOnEnter unmountOnExit>
              <section className={loginClasses.modalSpace}>
                {loginModal ? <Login /> : <Login />}
              </section>
            </Slide>
          </div>
        </div>

        <div className={regClasses.button}>
          <button 
            className='btn' 
            onClick={() => handleRegModal()}
            disabled={loginModal ? true : false}
          >
            Become a Member!
          </button>
          <div className={regClasses.wrapper}>
            <Slide direction="down" in={regModal} timeout={700} mountOnEnter unmountOnExit>
              <section className={regClasses.modalSpace}>
                {regModal ? <Subscribe /> : <Subscribe />}
              </section>
            </Slide>
          </div>
        </div>
      </section>
    </ClickAwayListener>
  )
}

export default Button
