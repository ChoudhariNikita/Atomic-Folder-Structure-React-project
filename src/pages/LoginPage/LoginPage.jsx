import React from 'react';
import AuthTemplate from '../../components/templates/AuthTemplate/AuthTemplate';
import LoginForm from '../../components/molecules/Forms/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <AuthTemplate>
            <div className="login-page">
                <h2>Login</h2>
                <LoginForm />
            </div>
        </AuthTemplate>
    );
};

export default LoginPage;
