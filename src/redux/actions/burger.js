import axios from 'axios';

export const fetchBurger = () => (dispatch) => {
    axios.get('http://localhost:3001/burger')
        .then(({ data }) => {
            dispatch(setBurger(data));
        });
};

export const setBurger = (items) => ({
    type: 'SET_BURGER',
    payload: items,
});
