import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Cart from './Cart';

const Header = () => {
  

  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact_us">Contact Us</NavLink>
        </li>       
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>    
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        <div className="cart-wrapper">
          <Cart />
        </div>
      </ul>
    </nav>
  );
};

export default Header;
