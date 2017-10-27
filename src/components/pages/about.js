import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signIn} from '../../actions/authActions';
class About extends Component{

    render(){
        return (
            <div className="wrapper-fluid">
                <div id="about">
                    <div className="cv">
                        <span className="name">Nick Dikiy</span>
                        <span className="education">Odessa State Polytechnic University - Bachelor of Engineering - Compute system engineering (2013-2017)</span>
                        <a href="#" className="phone">+380 (63) 34 53 777</a>
                        <a href="mailto:nickdikiy.nd@gmail.com" type="mail"  className="email">nickdikiy.nd@gmail.com</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default About;