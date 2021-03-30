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
      js: ''
    }
  }
  
  changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

  sendEmail = async (e) => {
    e.preventDefault(e)
    const {type, title, html, scss, js} = this.state
    try{
      await axios.post ('/api/mail', {type, title, html, scss, js})
      alert ('email sent')
    }
    catch {alert ('failed to send email')}
  }

  render(){
    return <div>
    
      <form onSubmit={this.sendEmail} className="upload">
    <h1>Submit Component</h1>
    <div className="form-set">
      <label for="type">Component Type</label><span className="required"> (Required)</span>
      <select value={this.state.type} onChange={this.changeHandler} name="type">
        <option>Select</option>
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
      <label for="title">Title</label><span className="required"> (Required)</span>
      <input type="text" value={this.state.title} name='title' onChange={this.changeHandler} placeholder="Title"/>
    </div>    
    <div className="form-set">
      <label for="HTML">HTML</label>
      <input type="text" value={this.state.html} name='html' onChange={this.changeHandler} placeholder="HTML Code"/>
        <div className="form-set">
        <label for="scss">SCSS</label>
        <input type="text" value={this.state.scss} name='scss' onChange={this.changeHandler} placeholder="SCSS Code"/>
        </div>
              <div className="form-set">
              <label for="js">JS</label>
              <input type="text" value={this.state.js} name='js' onChange={this.changeHandler} placeholder="JS Code"/>
              </div>
                    <div className="form-set">
                    <label for="file">Screenshot of Component</label>
                    <input type="file" name="file"/>
                    </div>
    </div>
    <div className="actions">
      <button type="submit">Submit</button>
    </div>
  </form>
  </div>}}


export default Upload
