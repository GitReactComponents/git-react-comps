import React from 'react'
import './SCSS/Upload.scss'

function Upload() {
  return (
    
      <form className="entry">
    <h1>Submit Component</h1>
    <div className="form-set">
      <label for="month">Component Type</label><span className="required"> (Required)</span>
      <select name="month">
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
      <input type="text" placeholder="Title"/>
    </div>    
    <div className="form-set">
      <label for="HTML">HTML</label>
      <input type="text" placeholder="HTML Code"/>
        <div className="form-set">
        <label for="scss">SCSS</label>
        <input type="text" placeholder="SCSS Code"/>
        </div>
              <div className="form-set">
              <label for="js">JS</label>
              <input type="text" placeholder="JS Code"/>
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
  )
  }


export default Upload
