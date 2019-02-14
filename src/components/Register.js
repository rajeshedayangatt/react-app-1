import React, { Component } from "react";
import "../assets/css/style.css";
import { connect } from "react-redux";
import { registerUser } from "../state/actions";

class Register extends Component {
  constructor() {
    super();
    this.changeInput = this.changeInput.bind(this);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleSubmit(e) {
    // Send a POST request
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    console.log(data);

    this.props.registerUser(data);
    this.props.history.push("/");
    //var reqData = "username=ganesh&password=123456&grant_type=password";
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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.changeInput}
            />
          </div>
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
          <button className="btn">Register</button>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   userRegister: data => dispatch(registerUser(data))
// });

export default connect(
  null,
  { registerUser }
)(Register);
