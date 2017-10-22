import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signIn} from '../../actions/authActions';
import axios  from 'axios';
import validate from '../../../backend/validator'


class Signin extends Component{
    constructor(props){
        super(props);

        this.state = {
            login: '',
            password: '',
            email: '',
            errors: ''
        }
    }
    changeInput = e =>{
        this.setState({
            [e.target.name]: e.target.value
        } );
    };


   sign = () =>{
        event.preventDefault;

        const userData = {login: this.state.login, password: this.state.password, email: this.state.email};
        let validData = validate(userData);
       if (validData.isValid){
           console.log(userData)
           axios.post('http://localhost:3000/signin', {
               user: JSON.stringify(userData),
               // headers:{'x-login': login,'x-pwd': password, 'x-email': email, }
           })
           .then(res =>{
               if (res.status == 200){
                   this.props.signIn(res.data.token)
                   localStorage.setItem('token', res.data.token)
                   this.props.history.push('./main')
               }
           })
           .catch(err =>{
               this.setState({
                   errors: err.response.data.errors
               })
           })

       }else{
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
                    <div className="inp-row">
                        <input className="inp" type="text" placeholder="e-mail" name="email" onChange={this.changeInput} />
                        <span className="info-message">{this.state.errors.email}</span>
                    </div>
                    <div className="btn "  onClick={this.sign}>Sign in</div>
                    <span>{this.state.errors.userExist}</span>
                </form>
            </div>
        )
    }
}




function mapStateToProps(state) {
    return{
        authReducer: state.authReducer
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         signIn: () => {
//             dispatch(signIn());
//         }
//     }
// };

export default connect(mapStateToProps,{signIn})(Signin);