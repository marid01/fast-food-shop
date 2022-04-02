const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const basket = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEMS_BASKET': {
            const currentItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];
            console.log('current items', currentItems)
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems,
                    totalPrice: getTotalPrice(currentItems)
                },
            };
            console.log(newItems);
            const totalPrice = Object.keys(newItems).reduce(
                (sum, key) => newItems[key].totalPrice + sum, 0
            );
            return {
                ...state,
                items: newItems,
                totalPrice
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
