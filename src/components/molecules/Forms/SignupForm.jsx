import React, { useState } from 'react';
import Input from '../../atoms/Inputs/Input';
import Button from '../../atoms/Buttons/Button';
import './Forms.css';
// import { signup } from '../../../services/AuthService/handleSignup';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        try{
            // const userData = await signup(email, password);
        }
        catch (error) {
            console.error('Signup failed:', error);
        }
        console.log('Signup attempt with', { email, password });
    };

    

    return (
        <form onSubmit={handleSignup} className="signup-form">
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
            />
            <Button className="button-primary" type="submit">Sign Up</Button>
        </form>
    );
};

export default SignupForm;
