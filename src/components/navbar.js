import React from 'react';
import {NavLink} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
                Portfolio
                </NavLink>

                <ul className="nav-menu">
                    <li className="nav-item">"
                        <NavLink exact to="/" activeClassName="active" className="nav-links">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/about" activeClassName="active" className="nav-links">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/contact" activeClassName="active" className="nav-links">
                            Contact
                        </NavLink>
                    </li>
                </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar