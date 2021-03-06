import React, { Component } from 'react';
import firebase from "firebase";
import fire from '../config/Fire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import DisplayContact from '../Components/DisplayContact';

class DisplayContacts extends Component {
  constructor(props){
    super(props);
    //this.emailKeyUp = this.emailKeyUp.bind(this);
  }

  NewContact = () => {
    this.props.onNewContact();
  };

  render() {
    return (
      <div>
        <Button onClick={this.NewContact} variant="contained" color="primary">
          <FontAwesomeIcon icon="plus-square" />
          <label>Create contact</label>
        </Button>
        {this.props.contacts.map(contact_data => {
          return (
            <DisplayContact contact={contact_data} />
          );
        })}
      </div>
    );
  }
}

export default DisplayContacts;
