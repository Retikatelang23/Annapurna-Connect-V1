import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Navbar from "../../components/home/Navbar";
import toast from "react-hot-toast";

const Signup = () => {
  /* Name, username, Password, confirm Password, 
  E-mail Address, Confirm E-mail address, captcha(),
   Aadhar Card, Address 1(), Address 2(optional), city, 
   Postal(pin code), Phone no., About Me (Optional) */

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // MobileNumber: "",
    // AdharCardNumber: "",
    // Age: "",
    // gender: "",
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
              {/* <input
                type="text"
                placeholder="Mobile Number"
                name="MobileNumber"
                onChange={handleChange}
                value={data.MobileNumber}
                required
                className={styles.input}
              /> */}
              {/* <input
                type="text"
                placeholder="Adhar Card Number"
                name="AdharCardNumber"
                onChange={handleChange}
                value={data.AdharCardNumber}
                required
                className={styles.input}
              />*/}
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className={styles.input}
              />
              {/*<input
                type="text"
                placeholder="Age"
                name="Age"
                onChange={handleChange}
                value={data.Age}
                required
                className={styles.input}
              />
               <input
                type="text"
                placeholder="Gender: Female / Male / Other"
                name="gender"
                onChange={handleChange}
                value={data.gender}	
                required
                className={styles.input}
              /> */}
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className={styles.input}
              />
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
