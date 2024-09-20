import React from "react";
import NavLinks from "../../atoms/NavLinks/NavLink";
import Text from "../../atoms/Texts/Text";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Text level={1} className="navbar-title">Blogify</Text>
            </div>
            <div className="navbar-right">
                <NavLinks />
            </div>
        </nav>
    );
};

export default Navbar;
