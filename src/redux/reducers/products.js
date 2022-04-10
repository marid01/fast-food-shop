import axios from "axios";

const initialState = {
    items: [],
    itemsCategory: [],
    isLoaded: false,
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BURGER':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };

        case 'SET_CATEGORIES':
            return {
                ...state,
                itemsCategory: action.payload
            };

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            };

        default:
            return state;
    }
};

export default products;


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

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});
