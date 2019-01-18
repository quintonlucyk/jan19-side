import React, { Component } from 'react';
import firebase from "firebase";
import fire from '../config/Fire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


class NewContact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      notes: "",
    };
    //this.emailKeyUp = this.emailKeyUp.bind(this);
  }

  cancelNewContact = () => {
    this.props.onCancelContact();
  };

  handleAddition = () => {

  };

  nameKeyUp = (e) => {
    this.setState({name: e.target.value});
  };

  emailKeyUp = (e) => {
    this.setState({email: e.target.value});
  };

  phoneNumberKeyUp = (e) => {
    this.setState({phoneNumber: e.target.value});
  };

  notesKeyUp = (e) => {
    this.setState({notes: e.target.value});
  };

  render() {
    return (
      <div>
        <h2>NewContact</h2>
        <form onSubmit={this.handleAddition}>
          <Grid className="grid">
          <label>
            Name:
            <Input type="text" name="name" onKeyUp={this.nameKeyUp} />
          </label>
          </Grid>
          <Grid className="grid">
          <label>
            Email:
            <Input type="text" name="email" onKeyUp={this.emailKeyUp} />
          </label>
          </Grid>
          <Grid className="grid">
          <label>
            Phone number:
            <Input type="text" name="phoneNumber" onKeyUp={this.phoneNumberKeyUp} />
          </label>
          </Grid>
          <Grid className="grid">
          <label>
            Notes:
            <TextField multiline={true} type="text" name="notes" onKeyUp={this.notesKeyUp} />
          </label>
          </Grid>
          <Input type="submit" value="Submit" />
        </form>
        <Button onClick={this.cancelNewContact}>Cancel</Button>
      </div>
    );
  }
}

export default NewContact;
