const functions = require("firebase-functions");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase-admin/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get } from "firebase/database";
const firebase = require("firebase/app");
require('firebase/database');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBVml7ciNuC3tDZAdACiYuQ2MLKzPUxSiA",
    authDomain: "adfa-world.firebaseapp.com",
    databaseURL: "https://adfa-world-default-rtdb.firebaseio.com",
    projectId: "adfa-world",
    storageBucket: "adfa-world.appspot.com",
    messagingSenderId: "493209296402",
    appId: "1:493209296402:web:3b6ba5d7a0d4d11df9c2cb",
    measurementId: "G-CPSSZQN4T1"
};

firebase.initializeApp(firebaseConfig);

var userID = "userID"
var firebaseRef = firebase.database()

// data to store
var data = {
    username: "wadiemendja",
    password: "UserPassword"
}

// store data in a node with a random unique key
firebaseRef.ref('users/')
firebaseRef.push(data)
/*

root
  |____ users
          |____-MCadGHUbDSEjwx_Ma
                       |_________ username:"wadiemendja"
                       |_________ password:"UserPassword"

*/

// store data in a node with a given key
firebaseRef.ref('users/' + userID)
firebaseRef.set(data)
/*

root
  |____ users
          |____userID
                  |___ username:"wadiemendja"
                  |___ password:"UserPassword"
                       
*/

// update data
var newData = {
    username: "anotherUsername",
    password: "anotherPassword"
}
var firebaseRef = firebase.database().ref('users/' + userID)
firebaseRef.update(newData)

// remove data
var firebaseRef = firebase.database().ref('users/' + userID)
firebaseRef.remove()
