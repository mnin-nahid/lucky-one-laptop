import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h1>Laptop Picker</h1>
                <div>
                    <a href="/about-us">About us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;