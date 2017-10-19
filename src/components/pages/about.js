import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signIn} from '../../actions/authActions';
class About extends Component{

    showList(){
        return this.props.authReducer.map((el, index) => {
            return(
                <li onClick={()=>this.props.signIn(el)} key={index}>{el.name}</li>
            )
        })
    }

    render(){
        return (
            <ul>
                {this.showList()}
            </ul>
        )
    }
}
function mapStateToProps(state) {
    return{
        authReducer: state.authReducer
    }
}

function matchDispatchToProps (dispatch){
    return bindActionCreators({signIn: signIn}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(About);