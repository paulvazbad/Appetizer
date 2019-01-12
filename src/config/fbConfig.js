import firebase from "firebase/app";
import React, { Component } from 'react';
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
console.log(process.env.REACT_APP_API_KEY)
var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: "appetizer-900af",
  storageBucket: "",
  messagingSenderId: "352709876549"
};

firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
});
export default firebase;
