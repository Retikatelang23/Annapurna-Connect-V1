const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    UserName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    adharCardNumber: { type: Number, required: true },
    age: { type: Number, required: true },
    address1: { type: String, required: true },
    address2: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: Number, required: true },
    phoneNumber: { type: Number, required: true },
    gender: { type: String, required: true },
	choose: { type: String, required: true },
  },
  { collection: "user-data" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
