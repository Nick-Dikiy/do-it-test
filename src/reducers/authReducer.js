import {ADD_USER, USER_LOGINED} from '../actions/authActions'

const INITIAL_STATE = {token: '', errors: ''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ADD_USER:
            return   { token: action.token };

        case USER_LOGINED:
            return {token: action.token};

        default:
            return state;

    }
}