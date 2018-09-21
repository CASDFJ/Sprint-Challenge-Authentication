import React, { Component } from "react";
import axios from "axios";

class Jokes extends Component {
  state = {
    users: []
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(user => (
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
      .get("http://localhost:3300/api/jokes", reqOptions)
      .then(res => {
        console.log("Users Data: ", res);
        this.setState({ users: res.data }); // Keep this for MVP
      })
      .catch(err => {
        console.log("Axios Error: ", err);
        this.props.history.push("/login");
      });
  }
}

export default Jokes;