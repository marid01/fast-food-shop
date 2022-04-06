import axios from 'axios';

export const fetchBurger = (delivery) => (dispatch) => {
    axios.get(`http://localhost:3001/burger?${delivery !== null ? `delivery=${delivery}` : '' } `)
        .then(({ data }) => {
            dispatch(setBurger(data));
        });
};

export const setBurger = (items) => ({
    type: 'SET_BURGER',
    payload: items,
});
