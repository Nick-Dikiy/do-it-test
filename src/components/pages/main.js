import React, { Component } from 'react';
import SimpleMap from '../SimpleMap'
import axios from 'axios';
import {connect} from 'react-redux';
import {save, load} from '../../actions/mapActions';

class Main extends Component{
    constructor(props){
        super(props);

        this.state = {
            markers: ''
        };
    }

}
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
                    this.props.save(markers);
                    axios.post('http://localhost:3000/saveMarkers', {data: markers})
                }else{
                    this.props.history.push('./login')
                }

            }else{
                console.log('markers is empty')
            }
    };

    showMarkers =() =>{

        const token = localStorage.getItem('token');

        if ( token != null ) {

            axios.interceptors.request.use(function (config) {
                    config.headers.Authorization = token;
                    return config;
                },
                function (err) {
                    return Promise.reject(err);
                });

            axios.get('http://localhost:3000/showMarkers')
                .then(res =>{
                        let markers = res.data.markers;
                    this.setState({
                        markers: markers
                    })
                        this.props.load(markers)

//
//                     console.log(dgElement)
//                     DG.marker(res.data.markers).addTo(dgElement);



                })
                .catch(err => {
                    console.log(err)
                })



        }else{
            this.props.history.push('./login')
        }
    };

        return (

            <div>
                <div className="container">
                    <div className="btn" onClick={this.showMarkers}>Show markers</div>
                    <div className="btn" onClick={this.saveMarkers}>Save markers</div>
                </div>

                <SimpleMap markers={this.state.markers}/>

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