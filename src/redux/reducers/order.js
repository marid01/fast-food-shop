const initialState = {
    items: {},
    bool: false
};

const order = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ORDER': {
            return {
                ...state,
                items: action.payload,
            };
        }

        case 'ADD_BOOL': {
            return {
                ...state,
                bool: action.payload,
            };
        }

        default:
            return state;
    }

}

export const addOrder = (obj) => ({
    type: 'ADD_ORDER',
    payload: obj
})

export const addOrderBool = (bool) => ({
    type: 'ADD_BOOL',
    payload: bool
})



export default order;
