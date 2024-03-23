import React from "react";
import MainNavbar from "../MainNavbar";
import { Link } from "react-router-dom";
import AddProducts from "./AddProducts";
import "../../../styles/MyProductMain.css"

const MyProductMain = () => {
  return (
    <div>
      <MainNavbar />

      <h1>
        <Link to="/addproducts" className="addProducts" element={<AddProducts/>}>Click To Add Your Products</Link>
      </h1>
    </div>
  );
};

export default MyProductMain;
