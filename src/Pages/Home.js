import React, { Component } from 'react';
import firebase from "firebase";
import fire from '../config/Fire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DisplayContacts from '../SubPages/DisplayContacts';
import NewContact from '../SubPages/NewContact';

class Home extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      DisplayContacts: true
    };
    //this.emailKeyUp = this.emailKeyUp.bind(this);
    //this.handleNewContact = this.handleNewContact.bind(this);
    //this.handleCancelContact = this.handleCancelContact.bind(this);
  }

  logout(){
    fire.auth().signOut();
  }

  handleNewContact = () => {
    this.setState({DisplayContacts: false});
  };

  handleCancelContact = () => {
    this.setState({DisplayContacts: true});
  };

  render() {
    return (
      <div>
        {this.state.DisplayContacts ? (<DisplayContacts onNewContact={this.handleNewContact}/>) : (<NewContact onCancelContact={this.handleCancelContact}/>)}
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
