import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
function Header() {
  return (
    <header className="head">
      <NavLink to="/">
        <img src="img5.jpg" height="60px" className="logo" />
      </NavLink>
      <Navbar className="nav" />
    </header>
  );
}

export default Header;
