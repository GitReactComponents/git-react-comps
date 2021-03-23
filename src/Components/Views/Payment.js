import React from 'react'
import {useForm} from 'react-hook-form'

import './SCSS/Payment.scss'

function Payment() {
  const {register, handleSubmit, errors} = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  
  return (
    <div>
      <form>
        This is the Payment Component!
      </form>
    </div>
  )
}

export default Payment
