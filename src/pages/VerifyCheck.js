import React from 'react';
import '../css/VerifyCheck.css';

function VerifyCheck() {
  return (
    <div className="verify-container">
      <h1 className="verify-heading">Check the Trust score</h1>
      <form className="verify-form">
        <label htmlFor="verify-input" className="verify-label">
          Enter PAN number :
        </label>
        <input
          id="verify-input"
          type="text"
          className="verify-input"
        />
        <button className="verify-button">Check</button>
      </form>
    </div>
  )
}

export default VerifyCheck;