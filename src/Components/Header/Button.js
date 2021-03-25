import React, {useState} from 'react'
import Subscribe from '../Views/Subscribe'
// import Modal from '../Modal/Modal'
import {Slide} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import './Button.scss'


const useStyles = makeStyles((theme) => ({
  button: {
    height: 65,
    width: 180
  },
  wrapper: {
    width: 180 + theme.spacing(1.5),
  },
  modalSpace: {
    width: 0,
    height: 750,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));


function Button() {
  const [modal, setModal] = useState(false)

  const classes = useStyles()

  const handleChange = () => {
    setModal((modal) => !modal)
  }




  return (
    <div className={classes.button}>
      <div className={classes.wrapper}>
        <button className='btn' onClick={() => handleChange()}>
          Become a Member!
        </button>
        <Slide direction="down" in={modal} timeout={700} mountOnEnter unmountOnExit>
          <section className={classes.modalSpace}>
            {modal ? <Subscribe /> : <Subscribe />}
          </section>
        </Slide>
      </div>
    </div>
  )
}

export default Button
