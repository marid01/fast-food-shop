import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import products from "./reducers/products";
import basket from "./reducers/basket"
import order from "./reducers/order"
import filters from "./reducers/filters";

const rootReducer = combineReducers({
    products,
    basket,
    order,
    filters
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
