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
    return (
      <div className='upload'>
  
        <div className='submit-info'>
          <h1 className='submit-header'>Submit Component</h1>
        </div>
  
        <div className='upload-grid'>
          <form onSubmit={this.sendEmail} className="upload-form">

            <section className="type">
              <label for="type">Component Type: </label>
            </section>
            <select className='select' value={this.state.type} onChange={this.changeHandler} name="type" required>
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

            <section className="title">
              <label for="title">Title: </label>
            </section>    
              <input className='title-input' type="text" value={this.state.title} name='title' onChange={this.changeHandler} placeholder="Title (e.g., Button with Animation, Contact Form, etc." required/>

            <section className="html">
              <label for="HTML">HTML: </label>
            </section>
              <input className='html-input' type="text" value={this.state.html} name='html' onChange={this.changeHandler} placeholder="HTML Code"/>

            <section className="scss">
              <label for="scss">SCSS: </label>
            </section>
              <input className='scss-input' type="text" value={this.state.scss} name='scss' onChange={this.changeHandler} placeholder="SCSS Code"/>

            <section className="js">
              <label for="js">Javascript: </label>
            </section>
              <input className='js-input' type="text" value={this.state.js} name='js' onChange={this.changeHandler} placeholder="Javascript Code"/>


            <button 
              className='submit-btn'
              type="submit">
                Submit
            </button>

        </form>
      </div>
    </div>
    )
  }}


export default Upload
