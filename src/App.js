import React, { Component } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./styles.css";

class App extends Component {
  componentWillReceiveProps(props) {
    if (props.status) {
      toast.success("Your Registeration Was Successfull.Please Click Login");
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/login">Login In</Link>
          <br />
          <Link to="/register">Register</Link>
          <br />
          <Link to="/">Home</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>

          <ToastContainer autoClose={8000} />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    status: state.userReducer.isRegistered
  };
};
export default connect(
  mapStateToProps,
  {}
)(App);
