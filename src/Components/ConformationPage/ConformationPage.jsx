import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './ConformationPage.css'; // Ensure correct CSS import path

const ConformationPage = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="conformation-page">
      <h1>🎉 Order Confirmation 🎉</h1>
      <p>🎊 Thank you for your order! Your order has been placed successfully. 🎊</p>
      <h2>Total Amount: ₹{getTotalCartAmount()}</h2>
      {/* You can add more details or an order summary here */}
      <div className="celebration">
      🎉🎊
      </div>
    </div>
  );
};

export default ConformationPage;
