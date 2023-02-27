const functions = require("firebase-functions");

// Import the functions you need from the SDKs you need
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

var firebaseRef = firebase.database().ref('emails');
document.querySelector('#button button--help-anyone').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    firebaseRef.push("dyyenice@gmail.com");
});