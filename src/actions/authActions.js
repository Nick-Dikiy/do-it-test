export const ADD_USER = 'ADD_USER';
export const signIn = (name)  => dispatch => {
        dispatch({
            type: ADD_USER,
            user: 'Nick'
        })
};