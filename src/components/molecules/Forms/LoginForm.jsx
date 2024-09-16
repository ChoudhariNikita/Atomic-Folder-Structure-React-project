import React, { useState } from 'react';
import Input from '../../atoms/Inputs/Input';
import Button from '../../atoms/Buttons/Button';
import './Forms.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login attempt with', { email, password });
    };

    return (
        <form onSubmit={handleLogin} className="login-form">
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
            <Button className="button-primary" type="submit">Login</Button>
        </form>
    );
};

export default LoginForm;
