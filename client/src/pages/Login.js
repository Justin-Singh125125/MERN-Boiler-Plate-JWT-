import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
state={
    email: "",
    password: ""
}

handleFormChange=(e)=>{
    this.setState({[e.target.name]: e.target.value })
}

handleSignup=(e)=>{
    axios.post("/api/user/signup", this.state).then((data)=>{

    })
}
  render() {
    return (
        <form>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleFormChange} />
            <label htmlFor="password">password</label>
            <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleFormChange} />

            <button type="button" onClick={this.handleSignup}>Submit</button>
        </form>

       
    )}
}

export default Login;
