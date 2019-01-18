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
        <Button onClick={this.logout} variant="contained" color="primary">
          Logout
        </Button>
        {this.state.DisplayContacts ? (<DisplayContacts onNewContact={this.handleNewContact}/>) : (<NewContact onCancelContact={this.handleCancelContact}/>)}
      </div>
    );
  }
}

export default Home;
