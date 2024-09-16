import React from 'react';
import Header from '../../organisms/Header/Header';
import './AuthTemplate.css';
import Footer from '../../organisms/Footer/Footer';

const AuthTemplate = ({ children }) => {
    return (
        <div className="auth-template">
            <Header />
            <main className="auth-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default AuthTemplate;
