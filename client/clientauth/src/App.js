import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Register from "./register/Register.js";
import Login from "./auth/Login.js";
import Jokes from "./jokes/Jokes.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default withRouter(App);
