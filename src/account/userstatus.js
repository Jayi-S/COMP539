import React from 'react';

const Userstatus = ({ isLoggedIn, username }) => {
  return (
    <div className="user-status">
      {isLoggedIn ? (
        <p>Welcome, {username}! You are logged in.</p>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Userstatus;
