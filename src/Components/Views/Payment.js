import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Url from '../../Url'
// import {useHistory} from 'react'
// import Header from '../Header/Header'
import Subscribe from './Subscribe'

import './SCSS/Payment.scss'
import '../Header/Button.scss'

const { REACT_APP_STRIPE_KEY } = process.env;

const Payment = (props) => {
  // const {push} = useHistory()
  const onToken = (token) => {
    console.log({ token });
    axios
      .post("/api/payment", { token, amount: 399 })
      .then((res) => {
        props.history.push('/')
        props.onSubmit()
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='payment'>
        <StripeCheckout
          name='Membership'
          token={onToken}
          stripeKey={REACT_APP_STRIPE_KEY}
          amount={399}
          allowRememberMe={false}
        >
          <div className='checkout-box'>
            <div className='product'>
            <img className='membership-tag' src='/img/membership-tag.png' alt='Membership tag logo' />
            </div>
            <div className='description'>
              <h3 className='dsc-text'>By purchasing this membership, you will have unlimited access
              to view, select and comment on any component that you would like. You will also have the 
              ability to upload your own components, if you so choose. This purchase will go towards 
              further research and development of the site, so thank you!</h3>
            </div>
            <div className='footer'>
              <button className='checkout-btn'>Checkout $3.99</button>
            </div>
          </div>
        </StripeCheckout>
    </div>
  );
};

export default Payment;
