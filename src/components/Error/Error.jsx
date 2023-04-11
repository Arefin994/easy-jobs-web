import React from 'react';
import './Error.css'
const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-heading">Oops!</h1>
      <p className="error-message">We couldn't find the page you were looking for.</p>
    </div>
  );
};

export default Error;