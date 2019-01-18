import React, { Component } from 'react';
import firebase from "firebase";
import fire from '../config/Fire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NewContact extends Component {
  constructor(props){
    super(props);
    //this.emailKeyUp = this.emailKeyUp.bind(this);
  }

  cancelNewContact = () => {
    this.props.onCancelContact();
  };

  render() {
    return (
      <div>
        <button onClick={this.cancelNewContact}>Cancel</button>
      </div>
    );
  }
}

export default NewContact;
