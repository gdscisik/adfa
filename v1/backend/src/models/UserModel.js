
const { Schema, SchemaTypes, Model } = require("firefose");
const { String, Date, Number } = SchemaTypes;

const UserSchema = new Schema({
  userId: {
    type: Number,
    required: true,
  },
  imageSource: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  fullAddress: {
    type: String,
    required: true,
  },
  tckn_ssn: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },

}, { timestamp: true });

const UserModel = new Model("User", UserSchema);
module.exports = UserModel;
/*
 UserModel.create({
  userId: 4,
  imageSource: "https://images.unsplash.com/photo-1542459025-05b107028098?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1077&q=80",
  email: "user4@gmail.com", 
  password: "123456",
  name: "user4",
  surname: "4user",
  fullAddress:"NY",
  tckn_ssn:"15434698245",
  nickname:"user444",
  birthdate: ,
  age:"23",
  gender: "male",
  country:"USA"
});
/*
const mongoose = require("mongoose");
const UserLogger = require("../scripts/logger/UserLogger.js");

const UserSchema = new mongoose.Schema(
  {
    full_name: String,
    password: String,
    email: String,
    profile_image: String,
  },
  { versionKey: false, timestamps: true }
);

UserSchema.post("save", (doc) => {
  UserLogger.log({
    level: "info",
    message: doc,
  });
});

UserSchema.plugin(require("mongoose-autopopulate"));
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;

*/
