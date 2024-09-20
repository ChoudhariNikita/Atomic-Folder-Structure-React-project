import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/profile/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Settings
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile/posts" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Posts
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile/comments" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Comments
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
