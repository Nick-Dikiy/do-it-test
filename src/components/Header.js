import { Link } from 'react-router-dom'
import React from 'react';

const Header = () => (

    <header className="app-header">
        <nav className="wrapper-fluid">
            <ul className="header-list">
                <li className="header-item"><Link className="header-link" to='./login'>Login</Link></li>
                <li className="header-item"><Link className="header-link" to='./main'>Main</Link></li>
                <li className="header-item"><Link className="header-link" to='./about'>About</Link></li>

            </ul>
        </nav>
    </header>
);


export default Header;