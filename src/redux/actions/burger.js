import axios from 'axios';

export const fetchBurger = (delivery) => (dispatch) => {
    axios.get(`http://localhost:3001/items?${delivery !== null ? `delivery=${delivery}` : '' } `)
        .then(({ data }) => {
            dispatch(setBurger(data));
        });
};

export const fetchCategories = () => (dispatch) => {
    axios.get("http://localhost:3001/categories")
        .then(({ data }) => {
            dispatch(setCategories(data));
        });
};

export const setBurger = (items) => ({
    type: 'SET_BURGER',
    payload: items,
});

export const setCategories = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: categories,
});
