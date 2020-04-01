import React, { Component } from "react";
import fire from "./config/fire";
import "./login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }
  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
  }
  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div>
        <Container className="container">
          <Card>
            <Card.Header>Login/Register</Card.Header>
            <Card.Body>
              <Card.Title>Login to the website</Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <div className="mb-2">
                  <Button
                    className="btn"
                    variant="secondary"
                    onClick={this.login}
                    type="submit"
                    size="lg"
                  >
                    Login
                  </Button>
                  <hr></hr>
                  <Button
                    className="btn"
                    variant="primary"
                    onClick={this.signup}
                    type="submit"
                    size="lg"
                  >
                    Register
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}
export default Login;
