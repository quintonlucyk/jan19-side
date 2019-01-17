import React, { Component } from 'react';
import Login from './Components/Login.js';
import './App.css';
import firebase from "firebase";
var config = {
  apiKey: "AIzaSyAWaDqjYK6iuFAKa50p_EvyQK_TzyEHRj0",
  authDomain: "jan19-side.firebaseapp.com",
  databaseURL: "https://jan19-side.firebaseio.com",
  projectId: "jan19-side",
  storageBucket: "jan19-side.appspot.com",
  messagingSenderId: "1079823639348"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
