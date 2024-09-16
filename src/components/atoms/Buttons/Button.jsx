import React from 'react';
import './Button.css';

const Button = ({ children, onClick, className, type = 'button' }) => {
    return (
        <button onClick={onClick} className={className} type={type}>
            {children}
        </button>
    );
};

export default Button;
