'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools} from 'redux-devtools-extension';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import About from './About'
import mainPage from './mainPage';
import App from './App';


import './css/main.css';
import './scss/main.scss';


ReactDOM.render(
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/mainPage" component={mainPage}/>
                <Route path="/about" component={About}/>

            </Switch>
        </Router>,
    document.getElementById('root')
);
