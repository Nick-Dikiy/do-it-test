'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getTracks } from  './actions/tracks';
import Menu from './Menu';

class App extends Component{
addTrack(){
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value='';
}
findTrack(){
 this.props.onFindTrack(this.searchInput.value);
}
    render(){
        return (
            <div>
                <Menu />
                <div>
                    <input type="text" ref={(input) => {this.trackInput = input}} />
                    <button onClick={this.addTrack.bind(this)}>Add track</button>
                </div>

                <div>
                    <input type="text" ref={(input) => {this.searchInput = input}} />
                    <button onClick={this.findTrack.bind(this)}>Find track</button>
                </div>

                <div>
                    <button onClick={this.props.onGetTracks}>Get trucks</button>
                </div>

                <ul>
                    {this.props.tracks.map((track, index) =>
                        <li key={index}>{track.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
    }),
    dispatch => ({
            onAddTrack: (name) => {
                const payload = {
                    id: Date.now().toString(),
                    name
                }
                dispatch({type: 'ADD_TRACK', payload});
            },

            onFindTrack: (name) => {
                dispatch({type: 'FIND_TRACK', payload: name});
            },

            onGetTracks: () => {
                dispatch(getTracks());
            }
        })

)(App);