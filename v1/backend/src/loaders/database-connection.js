/* const firebase = require("firebase/app");
require('firebase/database');

const mongoose = require("mongoose");

const connectDatabase = async () => {
    await mongoose.connect(
        `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }
    );
    console.log("Database connected successfully.");
};

module.exports = {
    connectDatabase,
};
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

var data = {
    username: "wadiemendja",
    password: "UserPassword"
}
firebaseRef.ref('users/')
firebaseRef.push(data)
firebaseRef.ref('users/' + userID)
firebaseRef.set(data);
var newData = {
    username: "anotherUsername",
    password: "anotherPassword"
}
var firebaseRef = firebase.database().ref('users/' + userID)
firebaseRef.update(newData)

var firebaseRef = firebase.database().ref('users/' + userID)
firebaseRef.remove()
 */

