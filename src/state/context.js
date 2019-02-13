import React, { Component } from "react";
import { reducer } from "./reducer";
export const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    number: 10,
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppProvider;
