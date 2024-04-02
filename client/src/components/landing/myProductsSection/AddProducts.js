import React from "react";
import MainNavbar from "../MainNavbar";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import MyProductMain from "./MyProductMain";
import axios from 'axios';

const AddProducts = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productname: "",
    quantityInKg: "",
    priceperKg: "",
    entryData: "",
    expiryDate: "",
    productImage: ""
    // productDescription: "",
  });

  const handleChange = async (e) => {
    console.log(e);
    if (e.target.name === 'productImage') {
      // console.log('Inside if');
      //  // Handle file selection for image upload
      //  const file = e.target.files[0];
      //  console.log('FILE', file);
      //  setFormData((prevData) => ({
      //   ...prevData,
      //   [e.target.name]: file,
      // }));
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      console.log(base64)
      setFormData({ ...formData, productImage : base64 })
      } else{
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
      console.log('FORMDATA', formData);
   }
  }
// API to submit data to backend
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log('Formdata', formData.productImage);
    const response = await axios.post('http://localhost:8080/api/addProducts', formData);
    if (response.status === 201) {
      alert('Product added successfully!');
      setFormData({
        productname: '',
        quantityInKg: 0,
        priceperKg: '',
        entryData: '',
        expiryDate: '',
        productImage: '',
      });
      navigate('/myproducts');
    } else {
      alert('Failed to add product');
    }
  } catch (error) {
    console.error('Error adding product:', error);
    alert('Failed to add product');
  }
};

  return (
//     <div>
//       <MainNavbar />
//       <div>
//         <Link to="/myproducts" element={<MyProductMain/>} >
//           <button className="goBack">Go Back</button>
//         </Link>
        
//       <h1 className="productheading display-4 text-center">Add Your Products</h1>
//         {/* product name, quantity(in kg), 
//           price(per kg), entry date, expiry date, 
//           product image, product desciption */}
//         <form  className="form-group productForm" onSubmit={handleSubmit}>
//           <label className="productLabel">Product Name</label>
//           <input
//             type="text"
//             placeholder="Enter your Product Name"
//             name="productname"
//             onChange={handleChange}
//             value={formData.productname}
//             required
//             className="productInput form-control"
//           />

//           <label className="productLabel">Quantity(in Kg)</label>
//           <input
//             type="number"
//             placeholder="Enter the quantity"
//             name="quantityInKg"
//             onChange={handleChange}
//             value={formData.quantityInKg}
//             required
//             className="productInput"
//           />

//           <label className="productLabel">Price(per Kg)</label>
//           <input
//             type="number"
//             placeholder="Enter the price per kg"
//             name="priceperKg"
//             onChange={handleChange}
//             value={formData.priceperKg}
//             required
//             className="productInput"
//           />

//           <label className="productLabel">Entry Date</label>
//           <input
//             type="date"
//             name="entryData"
//             onChange={handleChange}
//             value={formData.entryData}
//             required
//             className="productInput"
//           />
 
//           <label className="productLabel">Expiry Date</label>
//           <input
//             type="date"
//             name="expiryDate"
//             onChange={handleChange}
//             value={formData.expiryDate}
//             required
//             className="productInput"
//           />
// {/*
//           <label className="productLabel">Product Image</label>
//           <input
//             type="file"
//             name="productImage"
//             onChange={handleChange}
//             value={formData.productImage}
//             required
//             className="productInput"
//           />

//           <label className="productLabel">Product Description</label>
//           <textarea
//             type="text"
//             name="productDescription"
//             onChange={changeHandler}
//             value={formData.productDescription}
//             required
//             rows={3}
//             className="productInput"
//           /> */}
//           <button type="submit" className="makeEntry">Make Entry</button>
//         </form>
//       </div>
//     </div>
    <div>
      <MainNavbar />
      <div>
      <Link to="/myproducts" element={<MyProductMain/>} >
         <button className="goBack">Go Back</button>
      </Link>
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div
          class="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
        >
          <div class="flex flex-col justify-center p-8 md:p-14">
            <span class="mb-3 text-4xl font-bold">Add Product</span>
            <form onSubmit={handleSubmit}>
            <div class="py-4">
              <span class="mb-2 text-md">Product Name</span>
                <input
                    type="text"
                    class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    placeholder="Enter your Product Name"
                    name="productname"
                    onChange={handleChange}
                    value={formData.productname}
                    required
                  />
            </div>
            <div class="py-4">
              <span class="mb-2 text-md">Quantity(in Kg)</span>
              <input
                    type="number"
                    placeholder="Enter the quantity"
                    name="quantityInKg"
                    onChange={handleChange}
                    value={formData.quantityInKg}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  />
            </div>
            <div class="py-4">
              <span class="mb-2 text-md">Price(per Kg)</span>
              <input
                    type="number"
                    placeholder="Enter the price per kg"
                    name="priceperKg"
                    onChange={handleChange}
                    value={formData.priceperKg}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <div class="py-4">
              <span class="mb-2 text-md">Entry Date</span>
              <input
                    type="date"
                    name="entryData"
                    onChange={handleChange}
                    value={formData.entryData}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  />
            </div>
            <div class="py-4">
              <span class="mb-2 text-md">Expiry Date</span>
              <input
                    type="date"
                    name="expiryDate"
                    onChange={handleChange}
                    value={formData.expiryDate}
                    required
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  />
            </div>
            <div class="py-4">
              <span class="mb-2 text-md">Product image</span>
              <input
                type="file"
                name="productImage"
                onChange={(e) => handleChange(e)}
                accept='.jpeg, .png, .jpg'
                required
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              />
            </div>
            <button
              type="submit"
              class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            >
              Add
            </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AddProducts;

function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}