import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddressPage.css';

const AddressPage = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle address saving logic here
    navigate('/checkout/confirmation');
  };

  return (
    <div className="address-page">
      <h1>Shipping Address</h1>
      <form onSubmit={handleSubmit} className="address-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={address.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address Line 1</label>
          <input type="text" name="addressLine1" value={address.addressLine1} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address Line 2</label>
          <input type="text" name="addressLine2" value={address.addressLine2} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={address.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>State</label>
          <input type="text" name="state" value={address.state} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input type="text" name="postalCode" value={address.postalCode} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type="text" name="country" value={address.country} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Proceed to Confirmation</button>
      </form>
    </div>
  );
};

export default AddressPage;
