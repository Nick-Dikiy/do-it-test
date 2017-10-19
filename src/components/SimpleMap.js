'use strict';

import React, {Component} from 'react';
import DG from '2gis-maps';
import axios  from 'axios';


export default class SimpleMap extends  Component{
    constructor(props){
        super(props);

        this.state = {
            markersCoordinates: []
        };
    this.saveMarkers = this.saveMarkers.bind(this)
    }

    componentDidMount(){


        let  dgElement = DG.map('map',
            {zoom:13,center: coords}
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
            this.setState({
                markersCoordinates: [...this.state.markersCoordinates,[e.latlng.lat, e.latlng.lng]]
            });
            DG.marker([e.latlng.lat, e.latlng.lng]).addTo(dgElement);

        }.bind(this));
    }


    saveMarkers =() =>{
        axios.post('http://localhost:3000/mainPage', {
            corditates: ''+this.state.markersCoordinates,
        }).then( res =>{
        })
            .catch(err =>{
                console.log('false')
            })
    };

    showMarkers =() =>{
        axios.post('http://localhost:3000/showMarkers', {
            // showMarkers: '',
        }).then( res =>{
            console.log(res, '123123')

        })
            .catch(err =>{
                console.log('false')
            })
    };


    render(){

        return(
            <div className="container">
                <div className="btn" onClick={this.showMarkers}>Show markers</div>
                <div className="btn" onClick={this.saveMarkers}>Save markers</div>
                <div id="map"></div>
            </div>

        )
    }

};



