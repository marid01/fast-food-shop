import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import burger from "./reducers/burger";
import twister from "./reducers/twister";
import chicken from "./reducers/chicken";
import basket from "./reducers/basket"

const rootReducer = combineReducers({
    burger,
    twister,
    chicken,
    basket,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
