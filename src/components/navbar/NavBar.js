import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";
import "./navbar.css";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar-expand-lg fixed-top navbar-dark bg-navbar">
        <div className="navbar-container-fluid">
          <div className="navbar-mobile">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <img src={logo} width="200" alt="logo" />
            <i className="fas fa-shopping-cart"></i>
          </div>

          <div className="navbar-container">
            <div className="navbar-container__brand">
              <img src={logo} width="200" alt="logo" />
            </div>
            <div className="navbar-container__menu">
              <i className="fas fa-search"></i>
              <i className="fas fa-user"></i>
              <i className="fas fa-shopping-cart"></i>
            </div>
          </div>

          <div className="collapse navbar-collapse links-navbar" id="navbarNav">
            <div className="navbar-nav text-center">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link text-center"
                exact
                to="/sale"
              >
                SALE
              </NavLink>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link text-center"
                exact
                to="/e-shop"
              >
                E-SHOP
              </NavLink>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link text-center"
                exact
                to="/lookbook"
              >
                LOOKBOOK
              </NavLink>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link text-center"
                exact
                to="/campaña"
              >
                CAMPAÑA
              </NavLink>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link text-center"
                exact
                to="/locales"
              >
                LOCALES
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
