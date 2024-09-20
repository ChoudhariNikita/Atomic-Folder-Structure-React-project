import React from 'react';
import './Sidebar.css';
import ProfileLinks from '../../atoms/Links/ProfileLinks/ProfileLinks';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ProfileLinks />
        </div>
    );
};

export default Sidebar;
