import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import AppProvider, { AppContext } from "./state/context";

import "./styles.css";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <AppContext.Consumer>
          {context => (
            <button onClick={e => context.dispatch({ type: "LOGIN_USER" })}>
              INC
            </button>
          )}
        </AppContext.Consumer>
        <Login />

        <AppContext.Consumer>
          {context => <h1>{context.number}</h1>}
        </AppContext.Consumer>
      </div>
    </AppProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
