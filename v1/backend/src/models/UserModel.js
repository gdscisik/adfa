
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
