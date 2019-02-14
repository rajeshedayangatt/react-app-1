import React, { Component } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./styles.css";

class App extends Component {
  componentWillReceiveProps(props) {
    conosle.log(123);
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
        </div>
      </Router>
    );
  }
}

export default App;
