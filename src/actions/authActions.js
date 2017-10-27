export const ADD_USER = 'ADD_USER';
export const USER_LOGINED = 'USER_LOGINED';

export const signIn = (token)  => dispatch => {
    dispatch({
        type: ADD_USER,
        token: token
    });
};

export const logIn = (token)  => dispatch => {
    dispatch({
        type: USER_LOGINED,
        token: token
    });
};