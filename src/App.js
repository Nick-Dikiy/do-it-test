'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { redirect } from  './actions/redirect';
import Menu from './Menu';
import Auth from "./Auth";

class App extends Component{
    render(){
        return (
            <div className="container">
                <Menu />
                <Auth />
            </div>
        )
    }
}

export default App;