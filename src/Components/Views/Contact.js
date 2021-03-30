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
    return <div className='contact'>
    
      <form onSubmit={this.sendEmail} className="entry">
    <h1>Contact Us</h1>
    <div className="form-set">
      <label for="name">Name</label>
      <input value={this.state.name} onChange={this.changeHandler} name="name" type="text" placeholder="Name"/>
    </div>    
    <div className="form-set">
      <label for="email">Email</label>
      <input value={this.state.email} onChange={this.changeHandler} name="email" type="text" placeholder="Email"/>
        <div className="form-set">
        <label for="message">Message</label>
        <textarea value={this.state.message} onChange={this.changeHandler} name="message" type="text" placeholder="message"/>
        </div>
        </div>
    <div className="actions">
      <button type="submit">Submit</button>
    </div>
  </form>
   </div>}}

export default Contact
