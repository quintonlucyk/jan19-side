import React, { Component } from 'react';
import firebase from "firebase";
import fire from '../config/Fire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';

class DisplayContacts extends Component {
  constructor(props){
    super(props);
    //this.emailKeyUp = this.emailKeyUp.bind(this);
  }

  NewContact = () => {
    this.props.onNewContact();
  };

  render() {
    let contacts = this.props.contacts.map((contact) => {
      return (
      <div>
        contact.name
      </div>
      );
    });
    return (
      <div>
        <Button onClick={this.NewContact} variant="contained" color="primary">
          <FontAwesomeIcon icon="plus-square" />
          <label>Create contact</label>
          {contacts}
        </Button>
      </div>
    );
  }
}

export default DisplayContacts;
