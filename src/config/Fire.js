import firebase from "firebase";
const config = {
  apiKey: "AIzaSyAWaDqjYK6iuFAKa50p_EvyQK_TzyEHRj0",
  authDomain: "jan19-side.firebaseapp.com",
  databaseURL: "https://jan19-side.firebaseio.com",
  projectId: "jan19-side",
  storageBucket: "jan19-side.appspot.com",
  messagingSenderId: "1079823639348"
};
const fire = firebase.initializeApp(config);
export default fire;
