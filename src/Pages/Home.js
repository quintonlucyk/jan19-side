import React, { Component } from 'react';
import firebase from "firebase";
import fire from '../config/Fire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    //this.emailKeyUp = this.emailKeyUp.bind(this);
  }

  logout(){
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <FontAwesomeIcon icon="plus-square" />
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
