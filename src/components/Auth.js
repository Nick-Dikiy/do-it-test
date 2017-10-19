import React, { Component } from 'react';
import axios  from 'axios';
import {withRouter} from "react-router-dom";


class Auth extends Component{
    constructor(props){
        super(props);

        this.state = {
            login: '',
            password: '',
            email: '',
            loginDisplay: true,
            siginDisplay: false,
        };

        this.changePassword = this.changePassword.bind(this);
        this.changeLogin = this.changeLogin.bind(this);
        this.logIn = this.logIn.bind(this);
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
    changeEmail = e =>{
        this.setState({
            email: e.target.value
        } );
    };
    logIn = () =>{

        axios.post('http://localhost:3000/', {
            login: ''+this.state.login,
            password:''+this.state.password,
            email: ''+this.state.password
        }).then( res =>{
            this.props.history.push('./mainPage')
            })
            .catch(err =>{
                console.log('false')
            })
    };

    signIn = () =>{
        axios.post('http://localhost:3000/signin', {
            login: ''+this.state.login,
            password:''+this.state.password,
            email:''+this.state.email,
        }
        ).then(res =>{
            this.props.history.push('./mainPage')
        })
        .catch(err =>{

        })

    };


    toggleForm =() =>{
        this.setState({
            loginDisplay: !this.state.loginDisplay,
            signDisplay: !this.state.signDisplay
        })
    };

    render(){
        let loginForm;
        if (this.state.loginDisplay){
            loginForm =
                <div className="login">
                    <form className="popup">
                        <input className="inp" type="text" placeholder="login" onChange={this.changeLogin} />
                        <input className="inp" type="password" placeholder="password" onChange={this.changePassword} />
                        <div className="btn " onClick={this.logIn}>Log in</div>
                        <div className="btn " onClick={this.toggleForm}>Sig in</div>
                    </form>
                </div>
        }



        let signForm;
        if (this.state.signDisplay){
            signForm =
                <div className="sigin">
                    <form className="popup">
                        <input className="inp" type="text" placeholder="login" onChange={this.changeLogin} />
                        <input className="inp" type="password" placeholder="password" onChange={this.changePassword} />
                        <input className="inp" type="email" placeholder="e-mail" onChange={this.changeEmail} />
                        <div className="btn "  onClick={this.signIn}>Sign in</div>
                    </form>

                </div>
        }



        return (
            <div className="container">
                {loginForm}
                {signForm}
            </div>
        )
    }
}
export  default withRouter(Auth);