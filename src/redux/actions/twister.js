import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchTwister = () => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });

    axios
        .get("http://localhost:3001/twister")
        .then(({ data }) => {
            dispatch(setTwister(data));
        });
};

export const setTwister = (items) => ({
    type: 'SET_TWISTER',
    payload: items,
});
