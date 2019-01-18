import React, { Component } from 'react';
import firebase from "firebase";
import fire from '../config/Fire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <p>NewContact</p>
        <form onSubmit={this.handleAddition}>
          <label>
            Name:
            <input type="text" name="name" onKeyUp={this.nameKeyUp} />
          </label>
          <label>
            Email:
            <input type="text" name="email" onKeyUp={this.emailKeyUp} />
          </label>
          <label>
            Phone number:
            <input type="text" name="phoneNumber" onKeyUp={this.phoneNumberKeyUp} />
          </label>
          <label>
            Notes:
            <textarea type="text" name="notes" onKeyUp={this.notesKeyUp} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.cancelNewContact}>Cancel</button>
      </div>
    );
  }
}

export default NewContact;
