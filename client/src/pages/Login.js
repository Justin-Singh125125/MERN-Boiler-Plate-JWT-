import React, { Component } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom'

class Login extends Component {
state={
    email: "",
    password: "",
    name: ""
}

handleFormChange=(e)=>{
    this.setState({[e.target.name]: e.target.value })
}

handleSignup= async (e)=>{
   const res= await axios.post("/api/user/signup", this.state);

   console.log(res);
   if(res.data){    
        this.props.history.push('/')   
    }
}
  render() {
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" value={this.state.name} onChange={this.handleFormChange} />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleFormChange} />
            <label htmlFor="password">password</label>
            <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleFormChange} />

            <button type="button" onClick={this.handleSignup}>Submit</button>
        </form>

       
    )}
}

export default withRouter(Login);
