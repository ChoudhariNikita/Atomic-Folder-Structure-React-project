import React from 'react';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';

const HomePage = () => {
    return (
        <MainTemplate>
            <div className="home-page">
                <h2>Welcome to Blogify!</h2>
                <p>This is the home page where you can find recent blog posts and updates.</p>
            </div>
        </MainTemplate>
    );
};

export default HomePage;
