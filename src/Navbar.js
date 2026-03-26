import React from 'react';
import userIcon from "./images/user.svg";
import cartIcon from "./images/cart.svg";
import { Link } from "react-router-dom"; // only Link

const Navbar = () => {
  return (
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">FurniVerse<span>.</span></Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">

          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav ms-5">
            <li className="nav-item">
              <a className="nav-link" href="#"><img src={userIcon} alt="user" /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><img src={cartIcon} alt="cart" /></a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;