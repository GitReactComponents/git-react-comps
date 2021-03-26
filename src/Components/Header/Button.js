import React, {useState} from 'react'
import Subscribe from '../Views/Subscribe'
// import Modal from '../Modal/Modal'
import {Slide} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

// ! Temporary
import Login from '../Auth/Login'

import './Button.scss'


const useStyles = makeStyles((theme) => ({
  button: {
    height: 65,
    width: 10
  },
  wrapper: {
    width: 180 + theme.spacing(1.5),
  },
  modalSpace: {
    width: 200,
    height: 750,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));


function Button() {
  const [loginModal, setLoginModal] = useState(false)
  const [regModal, setRegModal] = useState(false)

  const classes = useStyles()

  const handleLoginModal = () => {
    setLoginModal((modal) => !modal)
  }

  const handleRegModal = () => {
    setRegModal((modal) => !modal)
  }




  return (
    <section>
      <div className={classes.button}>
        <div className={classes.wrapper}>
          <button className='btn login' onClick={() => handleLoginModal()}>
            Login
          </button>
          <Slide direction="left" in={loginModal} timeout={500} mountOnEnter unmountOnExit>
            <section className={classes.modalSpace}>
              {loginModal ? <Login /> : <Login />}
            </section>
          </Slide>
        </div>
      </div>



      <div className={classes.button}>
        <div className={classes.wrapper}>
          <button className='btn' onClick={() => handleRegModal()}>
            Become a Member!
          </button>
          <Slide direction="down" in={regModal} timeout={700} mountOnEnter unmountOnExit>
            <section className={classes.modalSpace}>
              {regModal ? <Subscribe /> : <Subscribe />}
            </section>
          </Slide>
        </div>
      </div>
    </section>
  )
}

export default Button
