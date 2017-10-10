'use strict';

import React, {Component} from 'react';
import DG from '2gis-maps';

export default class SM extends  Component{


    componentDidMount(){
        let  dgElement = DG.map('map',
            {
                zoom:10,
                center: coords
            }
        );


        let coords = [];


        dgElement.locate({setView: true, watch: true})
            .on('locationfound', function(e) {
                DG.marker([e.latitude, e.longitude]).addTo(dgElement);
                coords = [e.latitude, e.longitude];
            })
            .on('locationerror', function(e) {
                DG.popup()
                    .setLatLng(dgElement.getCenter())
                    .setContent('Доступ к определению местоположения отключён')
                    .openOn(dgElement);
            });


        dgElement.on('click',function (e) {
            DG.marker([e.latlng.lat, e.latlng.lng]).addTo(dgElement);
        });

    }


    render(){
        return(
            <div id="map"></div>
        )
    }

};



