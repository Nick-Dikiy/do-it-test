const initialState = [];

export default function playlist(state = initialState, action){


    if (action.type === 'ADD_TRACK'){
        return [
            ...state,
            action.payload
        ];
    }else if (action.type === 'FETCH_TRACKS_SUCSESS'){
        return action.payload;
    }
    return state;
}