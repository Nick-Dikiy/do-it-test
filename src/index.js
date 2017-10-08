'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunck from 'redux-thunk';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import About from './About'
import mainPage from './mainPage';
import App from './App';





import './css/main.css';
import './scss/main.scss';

import reducer from './reducers';



const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunck)));


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/mainPage" component={mainPage}/>
                <Route path="/about" component={About}/>

            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
