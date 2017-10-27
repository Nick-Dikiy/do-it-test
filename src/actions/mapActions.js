export const SAVE_MARKERS = 'SAVE_MARKERS';
export const LOAD_MARKERS = 'LOAD_MARKERS';
export const ADD_MARKERS = 'ADD_MARKERS';
export const SELECTED_ITEMS = 'SELECTED_ITEMS';
export const CLEAR_MARKERS = 'CLEAR_MARKERS';

export const addMarkers = (markers)  => dispatch => {
    dispatch({
        type: ADD_MARKERS,
        markers:  markers
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

export const select = (items)  => dispatch => {
    dispatch({
        type: SELECTED_ITEMS,
        items: items
    });
};

