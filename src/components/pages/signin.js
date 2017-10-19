import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signIn} from '../../actions/authActions';

class Signin extends Component{
    // constructor(props){
    //     super(props);
    //
    //     this.state = {
    //         login: '',
    //         password: '',
    //         email: '',
    //
    //     };
    // }

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

    sign = () =>{

        this.props.signIn('NICK');

        console.log('signIn', this.props.authReducer);
    };

    render(){
        return (
            <div className="container">
                <div className="sigin">
                    <form className="popup">
                        <input className="inp" type="text" placeholder="login" onChange={this.changeLogin} />
                        <input className="inp" type="password" placeholder="password" onChange={this.changePassword} />
                        <input className="inp" type="email" placeholder="e-mail" onChange={this.changeEmail} />
                        <div className="btn "  onClick={this.sign}>Sign in</div>
                    </form>

                </div>
            </div>
        )
    }


}
function mapStateToProps(state) {
    return{
        authReducer: state.authReducer
    }
}

// function matchDispatchToProps (dispatch){
//     return bindActionCreators({signIn: signIn}, dispatch(signIn()))
// }

export default connect(mapStateToProps,{signIn})(Signin);