import React from 'react'
import axios from 'axios'
import './SCSS/Upload.scss'

class Upload extends React.Component {

  constructor(){
    super()
    this.state={
      type:'',
      title: '',
      html: '',
      scss: '',
      js: '',
    }
  }
  
  changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

  sendEmail = async (e) => {
    e.preventDefault(e)
    const {type, title, html, scss, js, screenshot} = this.state
    try{
      await axios.post ('/api/mail', {type, title, html, scss, js})
      alert ('email sent')
    }
    catch {alert ('failed to send email')}
  }

  render(){
    return <div className='upload'>
    
      <form onSubmit={this.sendEmail} className="upload-form">
    <h1>Submit Component</h1>
    <div className="form-set">
      <label for="type">Component Type</label>
      <select value={this.state.type} onChange={this.changeHandler} name="type" required>
        <option value='' select disabled>--Select--</option>
        <option>Button</option>
        <option>Card</option>
        <option>Footer</option>
        <option>Form</option>
        <option>Header</option>
        <option>List</option>
        <option>Menu</option>
        <option>NavBar</option>
        <option>Search</option>
        <option>Tabs</option>
      </select>
    </div>
    <div className="form-set">
      <label for="title">Title</label>
      <input className='input-style' type="text" value={this.state.title} name='title' onChange={this.changeHandler} placeholder="Title (e.g., Button with Animation, Contact Form, etc." required/>
    </div>    
    <div className="form-set">
      <label for="HTML">HTML</label>
      <input className='input-style' type="text" value={this.state.html} name='html' onChange={this.changeHandler} placeholder="HTML Code"/>
        <div className="form-set">
        <label for="scss">SCSS</label>
        <input className='input-style' type="text" value={this.state.scss} name='scss' onChange={this.changeHandler} placeholder="SCSS Code"/>
        </div>
              <div className="form-set">
              <label for="js">Javascript</label>
              <input className='input-style' type="text" value={this.state.js} name='js' onChange={this.changeHandler} placeholder="Javascript Code"/>
              </div>
                    </div>
    <div className="actions">
      <button type="submit">Submit</button>
    </div>
  </form>
  </div>}}


export default Upload
