import React from 'react'
import axios from 'axios'
import './SCSS/Contact.scss'

<<<<<<< HEAD
function Contact() {
  return (
    <div className='contact'>
      <div>
        This is the contact page!
      </div>
=======

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
    return <div className='contact'>
    
      <form onSubmit={this.sendEmail} className="entry">
    <h1>Contact Us</h1>
    <div className="form-set">
      <label className='labels' for="name">Name</label>
      <input className='input-style' value={this.state.name} onChange={this.changeHandler} name="name" type="text" placeholder="Name" required/>
    </div>    
    <div className="form-set">
      <label className='labels' for="email">Email</label>
      <input className='input-style' value={this.state.email} onChange={this.changeHandler} name="email" type="email" placeholder="Email" required/>
        <div className="form-set">
        <label className='labels' for="message">Message</label>
        <textarea className='message-area' value={this.state.message} onChange={this.changeHandler} name="message" type="text" placeholder="Message" required/>
        </div>
        </div>
    <div className="actions">
      <button type="submit">Submit</button>
>>>>>>> main
    </div>
  </form>
   </div>}}

export default Contact
