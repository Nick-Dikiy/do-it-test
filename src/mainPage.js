import React, { Component } from 'react';
import  Menu from './Menu';
import SimpleMap from './SimpleMap';



class mainPage extends Component{
    render(){
        return (
            <div>
                <Menu />
                <SimpleMap />
            </div>
        )
    }
}

export  default mainPage;