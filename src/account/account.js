import React, { useState } from 'react';
import Sidebar from '../component/Sidebar'; 
import Premium from '../premium/premium'; 
import './account.css';
// import { useNavigate } from 'react-router-dom'; 

const Account = () => {
  const [userData, setUserData] = useState({
    username: 'user',
    phone: '123-456-7890',
    address: '123 Main St',
    zipCode: '12345',
    cardNumber: '',
    expDate: '',
    cvv: '',
    billingAddress: ''
  });

  // const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated user data:', userData);
  
    // navigate('/updated');
  };

  const handlePlanChoice = (plan) => {
    console.log(`User chose the ${plan} plan.`);
    // Implement any specific logic needed for plan choice here
  };

  return (
    <>
      <div className="account-container">
        <Sidebar />
        <form className="account-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h1>Edit Account Information</h1>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleChange}
              />
            </label>
            <label>
              Zip Code:
              <input
                type="text"
                name="zipCode"
                value={userData.zipCode}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form-section">
            <h1>Payment Information</h1>
            <label>
              Card Number:
              <input
                type="text"
                name="cardNumber"
                value={userData.cardNumber}
                onChange={handleChange}
              />
            </label>
            <label>
              Expiration Date:
              <input
                type="date"
                name="expDate"
                value={userData.expDate}
                onChange={handleChange}
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                name="cvv"
                value={userData.cvv}
                onChange={handleChange}
              />
            </label>
            <label>
              Billing Address:
              <input
                type="text"
                name="billingAddress"
                value={userData.billingAddress}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Update Information</button>
        </form>
      </div>
      <Premium onChoosePlan={handlePlanChoice} />
    </>
  );
};

export default Account;
