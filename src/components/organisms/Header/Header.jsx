import React from 'react';
import NavLink from '../../atoms/NavLinks/NavLink';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <h1 className="site-title">Blogify</h1>
            </div>
            <div className="header-right">
                <NavLink />
            </div>
        </header>
    );
};

export default Header;
