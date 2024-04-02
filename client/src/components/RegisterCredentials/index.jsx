import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Navbar from "../../components/home/Navbar";
import toast from "react-hot-toast";

const Signup = () => {
  /* Name,lastname, username,email, Password, confirm Password, 
   captcha(), Aadhar Card, age, Address 1(), Address 2(optional), city, 
   Postal(pin code), Phone no., About Me (Optional) */

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    UserName: "",
    email: "",
    password: "",
    confirmPassword: "",
    adharCardNumber: "",
    age: "",
    address1: "",
    address2: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    gender: "",
    choose: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/landingpage");
      console.log(res.message);
      toast.success("Account Created Successfully!");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.left}>
            <h1>Welcome Back</h1>
            <Link to="/login">
              <button type="button" className={styles.white_btn}>
                Sign in
              </button>
            </Link>
          </div>

          <div className={styles.right}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
              <h1>Create Account</h1>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                  value={data.firstName}
                  required
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  value={data.lastName}
                  required
                  className={styles.input}
                />
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="UserName"
                  name="UserName"
                  onChange={handleChange}
                  value={data.UserName}
                  required
                  className={styles.input}
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                  className={styles.input}
                />
              </div>

              <div className="flex gap-3">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  className={styles.input}
                />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={data.confirmPassword}
                  required
                  className={styles.input}
                />
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Adhar Card Number"
                  name="adharCardNumber"
                  onChange={handleChange}
                  value={data.adharCardNumber}
                  required
                  className={styles.input}
                />

                <input
                  type="number"
                  placeholder="Age"
                  name="age"
                  onChange={handleChange}
                  value={data.age}
                  required
                  className={styles.input}
                />
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Address - 1"
                  name="address1"
                  onChange={handleChange}
                  value={data.address1}
                  required
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Address - 2(optional)"
                  name="address2"
                  onChange={handleChange}
                  value={data.address2}
                  className={styles.input}
                />
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                  value={data.city}
                  required
                  className={styles.input}
                />
                <input
                  type="number"
                  placeholder="Postal Pincode"
                  name="postalCode"
                  onChange={handleChange}
                  value={data.postalCode}
                  required
                  className={styles.input}
                />
              </div>

              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={data.phoneNumber}
                  required
                  className={styles.input}
                />
                <input
                  type="text"
                  placeholder="Gender / female / male / other"
                  name="gender"
                  onChange={handleChange}
                  value={data.gender}
                  required
                  className={styles.input}
                />
              </div>

              <div >
              <input
                  type="text"
                  placeholder="Login As a farmer / buyer"
                  name="choose"
                  onChange={handleChange}
                  value={data.choose}
                  required
                  className={styles.input}
                />
              </div>

              {error && <div className={styles.error_msg}>{error}</div>}
              <button type="submit" className={styles.green_btn}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
