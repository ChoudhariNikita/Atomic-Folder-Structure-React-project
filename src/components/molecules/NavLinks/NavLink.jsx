import React from 'react';
import Link from '../../atoms/Links/Link';
import './NavLink.css';

const NavLinks = () => {
    return (
        <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Sign Up</Link>
        </div>
    );
};

export default NavLinks;
