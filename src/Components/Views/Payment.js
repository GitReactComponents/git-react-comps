import {useState, useEffect} from 'react'
import {loadStripe} from '@stripe/stripe-js'
// import {useForm} from 'react-hook-form'

// import './SCSS/Payment.scss'

const stripePromise = loadStripe('pk_test_51ITboKGYQXVvJTOKktB52oAUVbuF7NmgznknaRgBiLBZicHBI8uIK9N3lG0iUH53V2B8jpYWTnUA8IhhaebnXMHF00fkKhe5mV')

const ProductDisplay = ({handleClick}) => (
  <section>
    <div>
      <img
      alt='One-Time Membership'
      />
      <div>
        <h3>One-Time Membership</h3>
        <h3>$3.99</h3>
      </div>
    </div>
    <button type='button' role='link' onClick={handleClick}>Checkout</button>
  </section>
)

const Message = ({message}) => {
  <section>
    <p>{message}</p>
  </section>
}

function Payment() {
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    const query = new URLSearchParams(window.location.search)

    if(query.get('success')){
      setMessage('Order placed! You will receive an email confirmation.')
    }

    if(query.get('canceled')){
      setMessage('Order canceled -- come back and purchase your membership some other time!')
    }

  }, [])
  
  const handleClick = async (event) => {
    const stripe = await stripePromise
    
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST'
    })
    
    const session = await response.json()
    
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    })

    if(result.error){
      setMessage('Oops! Could not process your request. Please try again or wait for a further date.')
    }
  }

  return message ? (
    <Message message={message}/>
  ) : (
    <ProductDisplay handleClick={handleClick}/>
  )
}

export default Payment
