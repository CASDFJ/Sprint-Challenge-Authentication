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
          {this.state.jokes.map(user => (
            <li key={user.id}>
              {user.username}
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
      .get("http://localhost:6500/api/jokes", reqOptions)
      .then(res => {
        console.log("Users Data: ", res);
        this.setState({ jokes: res.data }); // Keep this for MVP
      })
      .catch(err => {
        console.log("Axios Error: ", err);
        this.props.history.push("/login");
      });
  }
}

export default Jokes;