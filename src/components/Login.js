import React, { Component } from "react";
import "../assets/css/style.css";

class Login extends Component {
  render() {
    return (
      <div className="login_form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter Email Address" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter Password" />
        </div>
        <button>Login</button>
      </div>
    );
  }
}

export default Login;
