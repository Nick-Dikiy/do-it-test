var mockAppData = [
    {
        id: '1',
        name: 'Sadman'
    },
    {
        id: '2',
        name: 'Sail'
    },
    {
        id: '3',
        name: 'pin'
    },
    {
        id: '4',
        name: 'cay'
    },
    {
        id: '5',
        name: 'sk'
    }
];


export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('i got tracks');
        dispatch({type: 'FETCH_TRACKS_SUCSESS', payload: mockAppData})
    }, 2000)
};