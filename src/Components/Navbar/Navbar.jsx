import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop"); // Default active menu item
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    navigate(`/${menuItem}`);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>E-SHOP</p>
      </div>
      <ul className="nav-menu">
        <li className={menu === "shop" ? "active" : ""} onClick={() => handleMenuClick("shop")}>
          <span style={{ textDecoration: 'none', color: '#626262' }}>Shop</span>
          {menu === "shop" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'>
          <button className="login-btn">Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="Cart" className="cart-icon" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
