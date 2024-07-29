import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import AddressPage from './Components/AddressPage/AddressPage';
import Popular from './Components/Popular/Popular';
import ConformationPage from './Components/ConformationPage/ConformationPage';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/shop' element={<Popular />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout/address' element={<AddressPage />} />
          <Route path='/checkout/confirmation' element={<ConformationPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
