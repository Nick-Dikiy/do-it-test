export const SAVE_MARKERS = 'SAVE_MARKERS';
export const LOAD_MARKERS = 'LOAD_MARKERS';
export const ADD_MARKERS = 'ADD_MARKERS';

import jwtDecode from 'jwt-decode';


export const addMarkers = (markers)  => dispatch => {
    console.log(markers)
    dispatch({
        type: ADD_MARKERS,
        markers: markers
    });
};

export const load = (markers)  => dispatch => {
    dispatch({
        type: LOAD_MARKERS,
        markers: markers
    });

};

export const save = (markers)  => dispatch => {
    dispatch({
        type: SAVE_MARKERS,
        markers: markers
    });
};

