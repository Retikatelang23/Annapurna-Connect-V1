import React from "react";
import MainNavbar from "../MainNavbar";
import { useState } from "react";
import {Link} from "react-router-dom"
import MyProductMain from "./MyProductMain";

const AddProducts = () => {
  const [formData, setFormData] = useState({
    productname: "",
    QuantityinKg: "",
    priceperKg: "",
    entryData: "",
    expiryDate: "",
    productDescription: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  // function submitHandler(e) {
  //   e.preventDefault();
  //   if (formData.password != formData.confirmPassword) {
  //     toast.error("Passwords do not match");
  //   }

  //   setIsLoggedIn(true);
  //   toast.success("Account Created Successfully");
  //   const accountData = {
  //     ...formData,
  //   };
  //   console.log(accountData);

  //   navigate("/dashboard");
  // }

  return (
    <div>
      <MainNavbar />
      <div>
        <Link to="/myproducts" element={<MyProductMain/>} >
          <button className="goBack">Go Back</button>
        </Link>
        
      <h1 className="productheading">Add Your Products</h1>
        {/* product name, quantity(in kg), 
          price(per kg), entry date, expiry date, 
          product image, product desciption */}
        <form  className="productForm">
          <label className="productLabel">Product Name</label>
          <input
            type="text"
            placeholder="Enter your Product Name"
            name="productname"
            onChange={changeHandler}
            value={formData.productname}
            required
            className="productInput"
          />

          <label className="productLabel">Quantity(in Kg)</label>
          <input
            type="number"
            placeholder="Enter the quantity"
            name="QuantityinKg"
            onChange={changeHandler}
            value={formData.QuantityinKg}
            required
            className="productInput"
          />

          <label className="productLabel">Price(per Kg)</label>
          <input
            type="number"
            placeholder="Enter the price per kg"
            name="priceperKg"
            onChange={changeHandler}
            value={formData.priceperKg}
            required
            className="productInput"
          />

          <label className="productLabel">Entry Date</label>
          <input
            type="date"
            name="entryData"
            onChange={changeHandler}
            value={formData.entryData}
            required
            className="productInput"
          />

          <label className="productLabel">Expiry Date</label>
          <input
            type="date"
            name="expiryDate"
            onChange={changeHandler}
            value={formData.expiryDate}
            required
            className="productInput"
          />

          <label className="productLabel">Product Image</label>
          <input
            type="file"
            name="productImage"
            onChange={changeHandler}
            value={formData.productImage}
            required
            className="productInput"
          />

          <label className="productLabel">Product Description</label>
          <textarea
            type="text"
            name="productDescription"
            onChange={changeHandler}
            value={formData.productDescription}
            required
            rows={3}
            className="productInput"
          />
        </form>

        <button className="makeEntry">Make Entry</button>
      </div>
    </div>
  );
};

export default AddProducts;
