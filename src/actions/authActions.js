export const ADD_USER = 'ADD_USER';
export const signIn = (name) => dispatch => {
    console.log('action complite, ' + name);
    dispatch({
        type: ADD_USER,
        user: name
    })
};