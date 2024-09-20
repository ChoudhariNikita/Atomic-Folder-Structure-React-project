import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';

const NavLinks = () => {
    return (
        <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
        </div>
    );
};

export default NavLinks;
