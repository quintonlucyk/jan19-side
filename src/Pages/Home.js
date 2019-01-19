import React, { Component } from 'react';
import firebase from "firebase";
import fire from '../config/Fire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DisplayContacts from '../SubPages/DisplayContacts';
import NewContact from '../SubPages/NewContact';
import Button from '@material-ui/core/Button';

class Home extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      DisplayContacts: true,
      contacts: []
    };
    //this.emailKeyUp = this.emailKeyUp.bind(this);
    //this.handleNewContact = this.handleNewContact.bind(this);
    //this.handleCancelContact = this.handleCancelContact.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
  }

  logout(){
    fire.auth().signOut();
  }

  handleAddContact = (contact) => {
    alert(contact.name);
    let newContacts = this.state.contacts;
    newContacts = newContacts.push(contact);
    alert(newContacts);
    this.setState({contacts: newContacts, DisplayContacts: true});
  };

  handleNewContact = () => {
    this.setState({DisplayContacts: false});
  };

  handleCancelContact = () => {
    this.setState({DisplayContacts: true});
  };

  render() {
    return (
      <div>
        <Button onClick={this.logout} variant="contained" color="secondary">
          Logout
        </Button>
        {this.state.DisplayContacts ? (<DisplayContacts contacts={this.state.contacts} onNewContact={this.handleNewContact}/>) : (<NewContact onAddContact={this.handleAddContact} onCancelContact={this.handleCancelContact}/>)}
      </div>
    );
  }
}

export default Home;
