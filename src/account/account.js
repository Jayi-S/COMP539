import React, { useState } from 'react';
import Sidebar from '../component/Sidebar'; 
import Premium from '../premium/premium'; // Adjusted to go up one directory and then into the premium directory
// Import the Premium component
import './account.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Account = () => {
  const [userData, setUserData] = useState({
    username: 'user',
    phone: '123-456-7890',
    address: '123 Main St',
    zipCode: '12345'
  });

  // const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated user data:', userData);
    // Potentially navigate to a different route after update
    // navigate('/updated');
  };

  const handlePlanChoice = (plan) => {
    console.log(`User chose the ${plan} plan.`);
    // Here you can navigate to a payment page or perform other actions
    // navigate(`/choose-plan/${plan}`);
  };

  return (
    <>
    <div className="account-container">
      <Sidebar /> 
      <form className="account-form" onSubmit={handleSubmit}>
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
        <button type="submit">Update Information</button>
      </form>
    
      
    </div>
    <Premium onChoosePlan={handlePlanChoice} />
    </>
  );
};

export default Account;






