import React from 'react';
import '../css/packagePage.css';

function PackagesPage() {
  return (
    <div className="pricing-container">
      <div className="pricing-card">

      <h2>Default</h2>

      <h3>$0</h3>

      <ul>

        <li>70MB Storage</li>

        <li>10 Users</li>

        <li>Email Support</li>

        <li></li>

      </ul>

      <button class="activePlan">Active</button>

    </div>

    <div className="pricing-card">

      <h2>Starter</h2>

      <h3>$500/Yearly</h3>

      <h4>or $50/Month</h4>

      <ul>

        <li>500MB Storage</li>

        <li>10 Users</li>

        <li>Email Support</li>

        <li></li>

      </ul>

      <button>Upgrade Now</button>

    </div>

    <div className="pricing-card">

      <h2>Medium</h2>

      <h3>$1000/Yearly</h3>

      <h4>or $100/Month</h4>

      <ul>

        <li>500MB Storage</li>

        <li>20 Users</li>

        <li>Priority Email Support</li>

      </ul>

      <button>Upgrade Now</button>

    </div>

    <div className="pricing-card">

      <h2>Larger</h2>

      <h3>$5000/Yearly</h3>

      <h4>or $500/Month</h4>

      <h2></h2>

      <ul>

        <li>500MB Storage</li>

        <li>Unlimited Users</li>

        <li>24/7 Phone and Email Support</li>

      </ul>

      <button>Upgrade Now</button>

    </div>

  </div>

  )

}



export default PackagesPage;

