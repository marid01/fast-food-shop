import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchChicken = () => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });

    axios
        .get("http://localhost:3001/chicken")
        .then(({ data }) => {
            dispatch(setChicken(data));
        });
};

export const setChicken = (items) => ({
    type: 'SET_CHICKEN',
    payload: items,
});
