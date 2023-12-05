import React, { useState } from 'react';
import './premium.css';

const Premium = ({ onChoosePlan }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleChoosePlan = (plan) => {
    setIsPopupVisible(true);
    setSelectedPlan(plan);
  };

  const handlePopupResponse = (response) => {
    setIsPopupVisible(false);
    if (response === 'yes') {
      onChoosePlan(selectedPlan);
    }
  };

  return (
    <div className="premium-plans-container">
      <h2 className="premium-plans-header">Premium Plans</h2>
      <div className="plans">
        <div className="plan basic">
        <h3>Basic Plan</h3>
          <p>Free</p>
          <ul>
            <li>Alias short</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
          </ul>
          <button onClick={() => handleChoosePlan('basic')}>Choose Plan</button>
        </div>
        <div className="plan standard">
          <h3>Standard Plan</h3>
          <p>$20/month</p>
          <ul>
            <li>Alias short</li>
            <li>magic AI</li>
            <li>customized service</li>
            <li>-</li>
            <li>-</li>
            
          </ul>
          <button onClick={() => handleChoosePlan('standard')}>Choose Plan</button>
        </div>


        <div className="plan premium">
          <h3>Premium Plan</h3>
          <p>$40/month</p>
          <ul>
            <li>Alias short</li>
            <li>magic AI</li>
            <li>customized service</li>
            <li>Analyse board</li>
            <li>24/7 phone and email support</li>
     
          </ul>
          <button onClick={() => handleChoosePlan('premium')}>Choose Plan</button>
        </div>
      </div>

      {isPopupVisible && (
        <div className="popup">
          <p>Do you want to switch to the {selectedPlan} plan?</p>
          <button onClick={() => handlePopupResponse('yes')}>Yes</button>
          <button onClick={() => handlePopupResponse('no')}>No</button>
        </div>
      )}
    </div>
  );
};

export default Premium;

