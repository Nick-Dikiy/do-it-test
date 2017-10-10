'use strict';
import React, { Component } from 'react';
import Map from './Map/Map.js';
import Marker from './Map/Marker.js';
import Popup from './Map/Popup.js';
import Icon from './Map/Icon.js';
import DivIcon from './Map/DivIcon.js';
import Ruler from './Map/Ruler.js';
import GeoJSON from './Map/GeoJSON.js';
import Wkt from './Map/Wkt.js';
import Circle from './Map//Circle.js';
import CircleMarker from './Map/CircleMarker.js';
import Polyline from './/Map/Polyline.js';
import Polygon from './Map/Polygon.js';
import Rectangle from './Map/Rectangle.js';

export default class Markers extends Component {
   constructor(props){
       super(props);
       this.state = {
           zoom: 13,
           center: [10,10],
           markers: [],
           pos: [10,10],
           withPopup: true,
           popupContent: 'I\'m here!'
       };



   var arr = [];

   arr = getCoordinate(function (args) {
       arr = [args.latitude, args.longitude];
       return [args.latitude, args.longitude];
   });

   function getCoordinate(callback) {
       navigator.geolocation.getCurrentPosition(
           function (position) {
               var returnValue = {
                   latitude: position.coords.latitude,
                   longitude: position.coords.longitude
               };
               callback(returnValue);
           }
       )
   }

   setTimeout  (() => {
    this.setState({
        zoom: 16,
        center: arr,
        markers: [],
        pos: arr,
        withPopup: true,
        popupContent: 'I\'m here!'.length
    })

   }, 1000);
}

    onChangeZoom = e => {
        this.setState({
            zoom: e.target.value
        });
    };

    onChangeCenter = e => {
        this.setState({
            center: e.target.value.split(',')
        });
    };

    onZoomend = e => {
        this.setState({
            zoom: e.target.getZoom()
        });
    };

    click = e => {
        this.setState({
            center: [
                e.target.getCenter().lat,
                e.target.getCenter().lng
            ]
        });
    };

    onChangePos = e => {
        this.setState({
            pos: e.target.value.split(',')
        });
    };

    addMarker = () => {
        let markers = this.state.markers;
        const pos = this.state.pos;
        const draggable = this.state.draggable;
        const popupContent = this.state.popupContent;
        let popup = null;
        if (this.state.withPopup) {
            popup = (
                <Popup>
                    { popupContent }
                </Popup>
            );
        }
        markers.push(
            <Marker
                key={this.state.markers.length}
                draggable={draggable}
                pos={pos}
            >
                { popup }
            </Marker>
        );
        this.setState({
            markers: markers
        });


    };

     a= addEventListener('click',function (e) {
         // console.log('q', e.addMarker)

     })


   // a = addEventListener('click', this.addMarker);


    render() {
        return (
                    <div>

                        <div>
                            <label>Position: </label>
                            <input onChange={this.onChangePos} value={this.state.pos} style={{width: 100}}/>
                            <button onClick={this.addMarker}>Add marker</button>
                        </div>



                        <Map
                            style={{width: "100%", height: "700px", marginTop: "40px"}}
                            center={this.state.center}
                            zoom={this.state.zoom}
                            onZoomend={this.onZoomend}
                            onDrag={this.onDrag}
                        >

                            {/*<Marker*/}
                                {/*key={this.state.markers.length}*/}
                                {/*pos={this.state.pos}*/}
                            {/*>*/}
                                {/*<Popup>*/}
                                    {/*{ this.state.popupContent }*/}
                                {/*</Popup>*/}

                            {/*</Marker>*/}

                            {/*onClick{this.state.markers}*/}

                            { this.state.markers }
                        </Map>
                    </div>
        )

    }
}

