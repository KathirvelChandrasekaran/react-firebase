import React, { Component } from "react";
import fire from "./config/fire";
import Button from 'react-bootstrap/Button';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        <br></br>
        <h1>You are logged in !!!</h1>
        <Button onClick={this.logout}>Logout</Button>
      </div>
    );
  }
}
export default Home;
