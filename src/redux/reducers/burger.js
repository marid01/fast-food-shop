const initialState = {
    items: [],
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

        default:
            return state;
    }
};

export default burger;
