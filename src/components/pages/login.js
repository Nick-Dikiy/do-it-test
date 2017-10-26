import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios'

import {logIn} from '../../actions/authActions';
import validate from '../../../backend/validator'


class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            login: '',
            password: '',
            errors: ''
        };
    }
    changeInput = e =>{
        this.setState({
            [e.target.name]: e.target.value
        } );
    };

    login = () =>{
        event.preventDefault;
        const userData = {login: this.state.login, password: this.state.password};
        let validData = validate(userData);
        if (validData.isValid){

            axios.post('http://localhost:3000/login', {
                user: userData,
                // headers:{'x-login': login,'x-pwd': password, 'x-email': email, }
            })
                .then(res =>{
                    if (res.status == 200){
                        this.props.logIn(res.data.token)
                        localStorage.setItem('token', res.data.token)
                        this.props.history.push('./main')
                    }
                })
                .catch(err =>{
                    console.log(err.response.data.errors);

                    this.setState({
                        errors: err.response.data.errors
                    })
                })

        } else {
            this.setState({
                errors: validData.errors
            })
        }
    };

    render(){

            return (
                <div className="container">
                    <form className="auth-form">
                        <div className="inp-row">
                            <input className="inp" type="text" placeholder="login" name="login" onChange={this.changeInput} />
                            <span className="info-message">{this.state.errors.login}</span>
                        </div>
                        <div className="inp-row">
                            <input className="inp" type="password" placeholder="password" name="password" onChange={this.changeInput} />
                            <span className="info-message">{this.state.errors.password}</span>
                        </div>
                        <div className="">


                            <div className="btn " onClick={this.login}>Log in</div>
                            <Link className="btn " to='./signin'>Sign in</Link>


                            <span>{this.state.errors.notFoudUser}</span>
                        </div>
                    </form>
                </div>
            )
        }


}

function mapStateToProps(state) {
    return {
        authReducer: state.authReducer
    }
}

export default connect(mapStateToProps,{logIn})(Login);