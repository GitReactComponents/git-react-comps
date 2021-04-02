import React from 'react'
import axios from 'axios'
import './SCSS/Contact.scss'

class Contact extends React.Component {

  constructor(){
    super()
    this.state={
      name:'',
      email: '',
      message: ''
    }
  }
  
  changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

  sendEmail = async (e) => {
    e.preventDefault(e)
    const {name, email, message} = this.state
    try{
      await axios.post ('/api/mail/contact', {name, email, message})
      alert ('email sent')
    }
    catch {alert ('failed to send email')}
  }

  render(){
    return (
      <div className='contact'>
        <div className='contact-us'>
          <h1 className='contact-header'>Contact Us</h1>
        </div>
      

        <div className='contact-grid-box'>
          <form className='contact-grid' onSubmit={this.sendEmail}>

            <section className='contact-name'>
              <label for="name">Name: </label>
            </section>  
              <input className='contact-name-input' value={this.state.name} onChange={this.changeHandler} name="name" type="text" placeholder="Name" required/>

            <section className="contact-email">
              <label for="email">Email: </label>
            </section>
              <input className='contact-email-input' value={this.state.email} onChange={this.changeHandler} name="email" type="email" placeholder="Email" required/>

            <section className="contact-msg">
              <label for="message">Message: </label>
            </section>
              <textarea className='contact-msg-input' value={this.state.message} onChange={this.changeHandler} name="message" type="text" placeholder="Message" required/>

            <button 
              className='contact-us-btn'
              type="submit">
                Submit
            </button>

          </form>
        </div>
      </div>
    
  )}
}

export default Contact
