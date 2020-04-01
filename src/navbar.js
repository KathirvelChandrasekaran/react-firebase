import React from "react";
import fire from "./config/fire";
import Navbar from 'react-bootstrap/Navbar'
import "./login.css";

export default class Navbar_App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  componentDidMount() {
    this.authListener();
  } 
  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div className="navColor">
        <Navbar bg = "primary" varient = "dark" className = "navBar">
          <Navbar.Brand href="#home">Login and Register</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>{this.state.user ? "Success" : "Failed"}</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
