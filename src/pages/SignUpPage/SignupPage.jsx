import React from 'react';
import AuthTemplate from '../../components/templates/AuthTemplate/AuthTemplate';
import SignupForm from '../../components/molecules/Forms/SignupForm';
import './SignupPage.css';

const SignupPage = () => {
    return (
        <AuthTemplate>
            <div className="signup-page">
                <h2>Sign Up</h2>
                <SignupForm />
            </div>
        </AuthTemplate>
    );
};

export default SignupPage;
