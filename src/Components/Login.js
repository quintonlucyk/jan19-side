import React, { Component } from 'react';
import firebase from "firebase";

class Login extends Component {
  constructor(props){
    super(props);

    //this.emailKeyUp = this.emailKeyUp.bind(this);
  }

  emailKeyUp = (e) => {
    this.setState({email: e.target.value});
  };

  passwordKeyUp = (e) => {
    this.setState({password: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode + " : " + errorMessage);
    });
  };

  render() {
    return (
      <div>
        <h1>Login:</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" name="email" onKeyUp={this.emailKeyUp} />
          </label>
          <label>
            Password:
            <input type="password" name="password" onKeyUp={this.passwordKeyUp} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
