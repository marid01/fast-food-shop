const initialState = {
    items: [],
    isLoaded: false,
};

const twister = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TWISTER':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
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

export default twister;
