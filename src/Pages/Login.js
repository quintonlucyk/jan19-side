import React, { Component } from 'react';
import firebase from "firebase";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
      if (error)
        this.sendError();
    }.bind(this));
  };

  sendError = () => {
    this.setState({error: true});
  };

  render() {
    return (
      <div className="login">
        <h1>Login:</h1>
        <form onSubmit={this.handleSubmit}>
          <Grid className="grid">
          <label>
            <span className="label">Email:</span>
            <Input type="text" name="email" onKeyUp={this.emailKeyUp} />
          </label>
          </Grid>
          <Grid className="grid">
          <label>
            <span className="label">Password:</span>
            <Input type="password" name="password" onKeyUp={this.passwordKeyUp} />
          </label>
          </Grid>
          {this.state.error ? (
            <Grid className="error">
              The email/password you entered is incorrect.
            </Grid>
          ): null}
          <Grid className="grid">
          <Button type="submit" className="loginButton" >Login</Button>
          </Grid>
        </form>
      </div>
    );
  }
}

export default Login;
