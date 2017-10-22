import React, { Component } from 'react';
import SimpleMap from '../SimpleMap'
import axios from 'axios';
import {connect} from 'react-redux';
import {save, load} from '../../actions/mapActions';

class Main extends Component{


    saveMarkers =() =>{
            if (this.props.mapReducer.markers !== '' ){
                let markers = JSON.stringify(this.props.mapReducer);

                const token = localStorage.getItem('token');

                if ( token != null ) {

                    axios.interceptors.request.use(function (config) {
                        config.headers.Authorization = token;
                        return config;
                    },
                    function (err) {
                        return Promise.reject(err);
                    });

                    axios.post('http://localhost:3000/saveMarkers', {data: markers})
                }else{
                    this.props.history.push('./login')
                }

            }else{
                console.log('markers is empty')
            }
    };

    showMarkers =() =>{
        axios.post('http://localhost:3000/showMarkers', {

        }).then( res =>{

        })
        .catch(err =>{
        })
    };


    render(){
        return (
            <div>
                <div className="container">
                    <div className="btn" onClick={this.showMarkers}>Show markers</div>
                    <div className="btn" onClick={this.saveMarkers}>Save markers</div>
                </div>

                <SimpleMap />

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        mapReducer: state.mapReducer,
        authReducer: state.authReducer
    }
}

export default connect(mapStateToProps, {save, load})(Main);