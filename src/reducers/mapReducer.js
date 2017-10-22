import {SAVE_MARKERS, LOAD_MARKERS, ADD_MARKERS} from '../actions/mapActions'

const INITIAL_STATE = {markers: ''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SAVE_MARKERS:
            return   { markers: action.markers };

        case LOAD_MARKERS:
            return {markers: action.markers};

        case ADD_MARKERS:
            return {markers: action.markers};

        default:
            return state;

    }
}