import React, { Component } from "react";
import { Form } from "reactstrap";
import { withRouter } from "react-router-dom";
import firebase from "../firebase";
import "./login2.css";

class Login extends Component {
  state = {
    email: "",
    password: "",

    login: []
  };
  resetForm = () => {
    this.setState({
      email: "",
      password: ""
    });
  };
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState(
      prevState => ({
        login: prevState.login.concat({
          email: this.state.email,
          password: this.state.password
        })
      }),
      () => this.resetForm()
    );

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => this.props.history.push("VendorsData"))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="wrapper">
        <Form onSubmit={this.handleSubmit}>
          <div id="formContent">
            <h2 className="title">
              <br />
              Vendors
            </h2>

            <input
              type="text"
              id="login"
              className="second username"
              placeholder="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              type="password"
              id="password"
              className="third password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <input type="submit" className="fourth customBtn" value="Login" />
            <label style={{ color: "red" }}></label>
          </div>
        </Form>
      </div>
    );
  }
}

export default withRouter(Login);
