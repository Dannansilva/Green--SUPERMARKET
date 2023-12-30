import React from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
}

const LoginRegistrationButton: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
        <button onClick={onClick} className="login-button">
            {label}
        </button>
    );
};

export default LoginRegistrationButton;

