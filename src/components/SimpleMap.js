'use strict';

import React, {Component} from 'react';
import DG from '2gis-maps';
import {connect} from 'react-redux';
import {addMarkers} from '../actions/mapActions';

class SimpleMap extends  Component{
    constructor(props){
        super(props);

        this.state = {
            markersLatLan: []
        };
    }

    componentDidMount(){


        let  dgElement = DG.map('map',
            {zoom:13,center: [74.9,42]}
        );

        dgElement.locate({setView: true, watch: false})
            .on('locationfound', function(e) {
                DG.marker([e.latitude, e.longitude]).addTo(dgElement);
            })
            .on('locationerror', function(e) {
                console.log(e)
                DG.popup()
                    .setLatLng(dgElement.getCenter())
                    .setContent('Доступ к определению местоположения отключён')
                    .openOn(dgElement);
            });

        dgElement.on('click',function (e) {
            this.setState({
                markersLatLan: [...this.state.markersLatLan,[e.latlng.lat, e.latlng.lng]]
            });
            DG.marker([e.latlng.lat, e.latlng.lng]).addTo(dgElement);

            this.props.addMarkers(this.state.markersLatLan)

        }.bind(this));
    }






    render(){
        return(
            <div className="container-full">
                <div id="map"></div>
            </div>
        )
    }

}



function mapStateToProps(state) {
    return {
        mapReducer: state.mapReducer
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         signIn: () => {
//             dispatch(signIn());
//         }
//     }
// };


export default connect(mapStateToProps, {addMarkers})(SimpleMap);



