import { Link } from 'react-router-dom'
import React from 'react';

const Header = () => (

    <header>
        <nav className="wrapper-fluid">
            <ul className="header-list">
                <li className="header-item"><Link className="header-link" to='./login'>login</Link></li>
                <li className="header-item"><Link className="header-link" to='./main'>main</Link></li>
                <li className="header-item"><Link className="header-link" to='./about'>about</Link></li>

            </ul>
        </nav>
    </header>
);


export default Header;