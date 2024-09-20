import React from 'react';
import { Link } from 'react-router-dom';

const ProfileLinks = () => {
    return (
        <ul className="profile-links">
            <li>
                <Link to="/profile/settings" className="nav-link">Settings</Link>
            </li>
            <li>
                <Link to="/profile/posts" className="nav-link">Posts</Link>
            </li>
            <li>
                <Link to="/profile/comments" className="nav-link">Comments</Link>
            </li>
        </ul>
    );
};

export default ProfileLinks;
