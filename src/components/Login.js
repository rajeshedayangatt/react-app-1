import React, { Component } from "react";
import "../assets/css/style.css";

class Login extends Component {
  constructor() {
    super();
    this.loginUser = this.loginUser.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  loginUser(e) {
    e.preventDefault();
  }
  changeInput(e) {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  }
  render() {
    return (
      <div className="login_form">
        <form onSubmit={this.loginUser}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={this.state.email}
              onChange={this.changeInput}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.changeInput}
            />
          </div>
          <button className="btn">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
