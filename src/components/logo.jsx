import React from 'react';
// Use '../' to go out of 'components' and into 'assets'
import logoImg from '../assets/logo.jpg'; 

const Logo = () => {
  return (
    <div className="logo-container">
      <img 
        src={logoImg} 
        alt="Company Logo" 
        style={{ width: '150px', height: 'auto' }} // Adjust size as needed
      />
    </div>
  );
};

export default Logo;