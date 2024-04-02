import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import MainNavbar from "../landing/MainNavbar"
import "../../styles/RealTime.css"

const RealTime = () => {

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [vegetableData, setVegetableData] = useState([]);
  
  useEffect(() => {
    callApi();
  }, [selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setRequestData({
      date: event.target.value,
    })
  };

  const [responseData, setResponseData] = useState(null);
  const [requestData, setRequestData] = useState({
    date: selectedDate,
  });

  const callApi = async () => {
    console.log('Inside callAPI');
    try {
      console.log(requestData);
      const response = await axios.post('http://localhost:8080/api/fetchRealtimeData', requestData);
      console.log('Response', response);
      setVegetableData(response.data.data);
      console.log('Vegetable data', vegetableData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // useEffect(() => {
  //   callApi(); // Call the API when the component is mounted
  // },[]); // Empty dependency array ensures this effect runs only once
  return (
    <div>
      <MainNavbar/>
    <div >
      <h1 className="realtime-heading">Realtime vegetable price data</h1>
      <div className="date-filter">
        <label className='chooseData' htmlFor="date">Choose a date: </label>
        <input 
          type="date" 
          id="date" 
          value={selectedDate} 
          onChange={handleDateChange} 
          className='calender'
        />
      </div>
    </div>
          <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Vegetable</th>
                <th>Price</th>
                <th>Retail Price</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              {vegetableData.map((vegetable, index) => (
                <tr key={index}>
                  <td>{vegetable.vegetablename}</td>
                  <td>{vegetable.price}</td>
                  <td>{vegetable.retailprice}</td>
                  <td>{vegetable.units}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default RealTime
