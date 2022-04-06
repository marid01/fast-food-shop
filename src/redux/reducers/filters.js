const initialState = {
    category: true,
};

const filters = (state = initialState, action) => {
    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            category: action.payload,
        };
    }
    return state;
};

export default filters;

export const setCategory = (bool) => ({
    type: 'SET_CATEGORY',
    payload: bool,
});
