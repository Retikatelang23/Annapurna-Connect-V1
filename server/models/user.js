const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const JWTPRIVATEKEY =
  "0467068646b9ade47f2e64b32c4f0390a79d5146b5d7297872e4d2109fa019a6ab9b6eedc2ac44c439ca5f409a9b0e4ce17c01761f43823d70bbda88b1e6acf9";

const userSchema = new mongoose.Schema({
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
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    UserName: Joi.string().required().label("UserName"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
    confirmPassword: passwordComplexity().required().label("Confirm Password"),
    adharCardNumber: Joi.number().required().min(100000000000).max(999999999999).label("Adhar Card Number"),
    age: Joi.number().required().label("Age"),
    address1: Joi.string().required().label("Address - 1"),
    address2: Joi.string().label("Address - 2(optional)"),
    city: Joi.string().required().label("City"),
    postalCode: Joi.number().required().label("Postal Pincode"),
    phoneNumber: Joi.number().required().label("Phone Number"),
    gender: Joi.string().required().label("Gender / female / male / other"),
	choose: Joi.string().required().label("Login As a farmer / buyer")
  });
  return schema.validate(data);
};

module.exports = { User, validate };
