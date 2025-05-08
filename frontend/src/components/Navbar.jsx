import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="/SwamikrupaTradersPRIMARY.jpg"
          alt="Swamikrupa Traders Logo"
          style={{
            width: "40px", // Adjust the size of the logo
            height: "40px", // Maintain a square shape
            objectFit: "contain", // Ensure the logo fits within the dimensions
            marginRight: "10px", // Add spacing between the logo and text
          }}
        />
        <span>Swamikrupa Traders</span>
      </div>
      <ul>
        <li><NavLink to="/" end activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/about" activeclassname="active">About us</NavLink></li>
        <li><NavLink to="/products" activeclassname="active">Products</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;