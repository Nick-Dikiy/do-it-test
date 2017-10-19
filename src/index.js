'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {  BrowserRouter  } from 'react-router-dom';
import Routes from './routes'
import Header from './components/Header'


import rootReducer from './reducers'

import './scss/main.scss';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Routes />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
