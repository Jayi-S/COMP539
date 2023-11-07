import React from 'react';
import './premium.css'; 

const Premium = ({ onChoosePlan }) => {
  return (
    <div className="premium-plans-container">
      <h2 className="premium-plans-header">Premium Plans</h2>
      <div className="plans">
 
        <div className="plan basic">
          <h3>Basic Plan</h3>
          <p>Free</p>
          <ul>
            <li>Alias short</li>
        
          </ul>
          <button onClick={() => onChoosePlan('basic')}>Choose Plan</button>
        </div>
        

        <div className="plan standard">
          <h3>Standard Plan</h3>
          <p>$20/month</p>
          <ul>
            <li>Alias short</li>
            
          </ul>
          <button onClick={() => onChoosePlan('standard')}>Choose Plan</button>
        </div>


        <div className="plan premium">
          <h3>Premium Plan</h3>
          <p>$40/month</p>
          <ul>
            <li>Alias short</li>
     
          </ul>
          <button onClick={() => onChoosePlan('premium')}>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
