import React, { Component } from 'react'

class SignIn extends Component {
   state = {
     email: '',
     password: ''  
   }
   handleChange = (e) => {
       this.setState({
       [e.target.id]: e.target.value               //för kunna registrera email
       })
//console.log(e) det här har använts i början
   }
   handleSubmit = (e) => {
       e.preventDefault();                          //för att kunna registrera password
       console.log(this.state) 

//console.log(e) det skrev såhär i början
   }
   render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign in</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
              <button className="btn pink lighten-1 zdepth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn


// Se kommentar i index.html angående sign ins script src effekt