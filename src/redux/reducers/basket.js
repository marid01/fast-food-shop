const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const basket = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEMS_BASKET': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                },
            };

            return {
                ...state,
                items: newItems,
            };
        }

        case 'MINUS_BASKET_ITEM': {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems
                },
            };

            return {
                ...state,
                items: newItems
            };
        }

        default:
            return state;
    }

}

export const addItemsToBasket = (obj) => ({
    type: 'ADD_ITEMS_BASKET',
    payload: obj
})
export const minusBasketItem = (id) => ({
    type: 'MINUS_BASKET_ITEM',
    payload: id,
});

export default basket;
