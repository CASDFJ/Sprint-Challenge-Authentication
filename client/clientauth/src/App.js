import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import SignUp from "./Signup/SignUp.js";
import SignIn from "./Signin/SignIn.js";
import Jokes from "./Jokes/Jokes.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/Jokes" component={Jokes} />
      </div>
    );
  }
}

export default withRouter(App);
