import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = ({ className = "w-10 h-10" }) => {
    return (
        <img
            src={logoImg}
            alt="Sakina Space Logo"
            className={`${className} object-contain`}
        />
    );
};

export default Logo;
