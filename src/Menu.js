import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Menu extends Component{
    render(){
        return (
            <ul className="header-nav">
                <li className="header-nav-item"><Link className="header-nav-link" to="/">Авторизация</Link></li>
                <li className="header-nav-item"><Link className="header-nav-link" to="/mainPage">Главная</Link></li>
                <li className="header-nav-item"><Link className="header-nav-link" to="/about">О авторе</Link></li>
            </ul>
        )
    }
}

export  default Menu;
