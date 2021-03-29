import React from 'react'

function Contact() {
  return (
    <div className='contact'>
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      concerns: ""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };
  
  handleChange(e){
    switch(e.target.id){
      case "name":
        this.setState({
          name: e.target.value
        });
        break;
      case "email":
        this.setState({
          email: e.target.value
        });
        break;
      case "concerns":
        this.setState({
          concerns: e.target.value
        });
        break;
      default:
        console.log("Error!");
    }
  }
  
  handleSubmit(e){
    e.preventDefault();
    alert(`Thanks for your submission, ${this.state.name}. We will\n be right with you shortly.`);
  }
  
  render(){
    return(
      <div className="centered">
        <h2>Contact Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input id="name" type="text"
              value={this.state.name}
              onChange={this.handleChange} 
              placeHolder="name"/>
          </label>
          <label>
            Email:
            <input id="email" type="email" 
              value={this.state.email}
              onChange={this.handleChange}
              placeHolder="email"/>
          </label>
          <label>
            Concerns:
            <textarea id="concerns"
              value={this.state.concerns}
              placeHolder="Please type out what you want to say..."
              onChange={this.handleChange} />
          </label>
          <input type="submit"
            value="Submit"/>
        </form>
      </div>  
    );
  }
};
    </div>
  )
}

export default Contact
