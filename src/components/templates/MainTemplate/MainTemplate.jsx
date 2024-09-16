import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import './MainTemplate.css';

const MainTemplate = ({ children }) => {
    return (
        <div className="main-template">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainTemplate;
