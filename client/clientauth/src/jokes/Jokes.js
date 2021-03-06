import React, { Component } from "react";
import axios from "axios";

class Jokes extends Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.jokes.map(joke => (
            <li key={joke.id}>
              {`Set Up: ${joke.setup}`}
              {`Punch-Line: ${joke.punchline}`}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    const reqOptions = {
      headers: {
        Authorization: token
      }
    };

    axios
      .get("http://localhost:3300/api/jokes", reqOptions)
      .then(res => {
        console.log("Users Data: ", res);
        this.setState({ jokes: res.data }); // Keep this for MVP
      })
      .catch(err => {
        console.log("Axios Error: ", err);
        this.props.history.push("/SignUp");
      });
  }
}

export default Jokes;