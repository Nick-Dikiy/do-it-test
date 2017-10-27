'use strict';

import React, {Component} from 'react';
import DG from '2gis-maps';
import {connect} from 'react-redux';
import {addMarkers,clearMarkers} from '../actions/mapActions';
import 'leaflet-control-geocoder'
class SimpleMap extends  Component{
    constructor(props){
        super(props);
        this.state = {
            markers: [],
            dgElement: null,
        };
    }

    componentDidMount() {
        let dgElement = DG.map( 'map', {zoom: 12,minZoom:2, center: [46.46, 30.76], closePopupOnClick: false, geoclicker: {showPhotos:true, showBooklet:true, showRouteSearch: true}} );

        let marker = (a,b) =>{
           DG.marker([a,b]).addTo(dgElement);
           dgElement.setView([a,b]);
        };

        dgElement.locate({setView: false, watch: false})
            .on('locationfound', function (e) {
                let lat = e.latlng.lat;
                let lng = e.latlng.lng;
                marker(lat,lng);
                document.getElementsByClassName('dg-customization__marker')[0].id ='current_position'

            })
            .on('locationerror', function (e) {
                DG.popup()
                    .setLatLng(dgElement.getCenter())
                    .setContent('Доступ к определению местоположения отключён')
                    .openOn(dgElement);
            });

        dgElement.on('click', function (e) {
            let lat = e.latlng.lat;
            let lng = e.latlng.lng;

            marker(lat,lng);

            this.setState({
                markers: [...this.state.markers, [lat, lng]]
            });

            this.props.addMarkers(this.state.markers);

        }.bind(this));

        DG.control.location({position: 'bottomright'}).addTo(dgElement);
        DG.control.ruler({position: 'bottomleft'}).addTo(dgElement);
        DG.control.traffic().addTo(dgElement);
        let geocoder = L.Control.geocoder().addTo(dgElement);

        this.setState({
            dgElement: dgElement,
        });
    }

    componentDidUpdate() {
        const { dgElement } = this.state;

        let markers = (this.props.mapReducer.markers);

        for (let key in markers) {
            DG.marker(markers[key]).addTo(dgElement);
            dgElement.setView(markers[key]);
        }
        let items = (this.props.mapReducer.items);
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
};

export default connect(mapStateToProps, {addMarkers, clearMarkers})(SimpleMap);



