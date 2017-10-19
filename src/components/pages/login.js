import React, { Component } from 'react';
import { Route, Switch, Link  } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            login: '',
            password: '',
            email: '',

        };
    }

    changeLogin = e =>{
        this.setState({
            login: e.target.value
        } );
    };
    changePassword = e =>{
        this.setState({
            password: e.target.value
        } );
    };



    render(){

            return (
                <div className="container">
                    <div className="login">
                        <form className="popup">
                            <input className="inp" type="text" placeholder="login" onChange={this.changeLogin} />
                            <input className="inp" type="password" placeholder="password" onChange={this.changePassword} />
                            <div className="buttons">
                                <div className="btn " onClick={this.logIn}>Log in</div>
                                <Link className="btn " to='./signin'>Sign in</Link>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }


}

export  default Login