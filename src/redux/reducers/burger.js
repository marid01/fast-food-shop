const initialState = {
    items: [],
    itemsCategory: [],
    isLoaded: false,
};

const burger = (state = initialState, action) => {
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

        default:
            return state;
    }
};

export default burger;
