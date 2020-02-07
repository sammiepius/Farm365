import React, { Component } from "react";
import {Form} from 'reactstrap'
import firebase from './firebase';


class SignUp extends Component {
  state = {
    email: "",
    password: "",
    signup:[]
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };


  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state
    this.setState(prevState => ({
      signup: prevState.signup.concat({
        username: this.state.email,
        password: this.state.password,
       
      })
    }));

    firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) =>console.log(user))
    .catch(error => console.log(error))

    // console.log(this.state.email,this.state.password)
  };

  render() {
    return (
 <div className="wrapper">
        <Form onSubmit={this.handleSubmit}>
        <div id="formContent">
          <h2 className="title">Sign UP</h2>

            <input
              type="email"
              id="login"
              className="second username"
              placeholder="password"
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
            <input type="submit" className="fourth customBtn" value="Sign up" />
            <label style={{ color: "red" }}></label>
        
        </div>
        </Form>
      </div>
    )
  }
}

export default SignUp;
