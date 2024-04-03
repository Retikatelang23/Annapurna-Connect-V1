import React, { useEffect, useState } from "react";
import MainNavbar from "../MainNavbar";
import { Link } from "react-router-dom";
import AddProducts from "./AddProducts";
import "../../../styles/MyProductMain.css"
import axios from 'axios';

const MyProductMain = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/fetchProductsPerUser');
        console.log('Response',response);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <MainNavbar />
      <h1 >
        <Link to="/addproducts" className="addProducts" element={<AddProducts/>}>Click To Add Your Products</Link>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {products.map(product => (
        <div key={product._id} className="bg-slate-100 p-4 rounded card">
          <img
            src={product.productImage}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded "
          />
          <h3 className="text-lg font-semibold mb-2 ">{product.productname}</h3>
          <p className="">Quantity(in Kg): {product.quantityInKg}</p>
          <p className="">Price(per Kg): {product.priceperKg}</p>
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default MyProductMain;
