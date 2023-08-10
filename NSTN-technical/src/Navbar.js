import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

import { useAuth0 } from '@auth0/auth0-react';
import { CgMenu, CgClose } from 'react-icons/cg';
function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <div className={openMenu ? 'menuicon active' : 'menuicon'}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="nav-menu"
              to="/"
              onClick={() => setOpenMenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-menu"
              to="/about"
              onClick={() => setOpenMenu(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-menu"
              to="/contact"
              onClick={() => setOpenMenu(false)}
            >
              Contact
            </NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <p className="username">{user.name}</p>
            </li>
          )}
          <div>
            {isAuthenticated ? (
              <li>
                <button
                  className="btn-log"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button className="btn-log" onClick={() => loginWithRedirect()}>
                  Log In
                </button>
                ;
              </li>
            )}
          </div>
        </ul>
        <div className="cgmenu">
          <div className="threedot">
            <CgMenu
              name="menu-outline"
              className="mobile-icon"
              onClick={() => setOpenMenu(true)}
            />
          </div>
          <CgClose
            name="close-outline"
            className="close-outline mobile-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
