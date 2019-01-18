import React, { Component } from 'react';
import firebase from "firebase";
import fire from '../config/Fire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <FontAwesomeIcon icon="plus-square" onClick={this.NewContact} />
      </div>
    );
  }
}

export default DisplayContacts;
