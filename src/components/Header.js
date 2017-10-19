import { Link } from 'react-router-dom'
import React from 'react';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='./login'>login</Link></li>
                <li><Link to='./main'>main</Link></li>
                <li><Link to='./about'>about</Link></li>

            </ul>
        </nav>
    </header>
);


export default Header;