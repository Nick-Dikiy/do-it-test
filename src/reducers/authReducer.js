import {ADD_USER} from '../actions/authActions'
const INITIAL_STATE = {user: 'unknown user'};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ADD_USER:
            console.log('bla')
            return   { user: action.user };

        default:
            return state;

    }
}