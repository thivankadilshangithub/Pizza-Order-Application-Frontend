import  { combineReducers } from 'redux';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  {composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducer';

import { getAllPizzasReducer , addPizzasReducer , getAllPizzasByIdReducer ,editPizzasReducer} from './reducers/pizzaReducers';

import { registerUserReducer } from './reducers/userReducer';

import { loginUserReducer } from './reducers/userReducer';

import { placeOrderReducer , getUserOrdersReducer , getAllOrdersReducer } from './reducers/orderReducer';



const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    addPizzasReducer : addPizzasReducer,
    getAllPizzasByIdReducer : getAllPizzasByIdReducer,
    editPizzasReducer : editPizzasReducer,
    getAllOrdersReducer : getAllOrdersReducer,
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): null

const initialState = {
    cartReducer : {
        cartItems : cartItems
    },
    loginUserReducer : {
        currentUser : currentUser
    }
}


const composeEnhancers = composeWithDevTools({})

const store = createStore(
    finalReducer ,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);
    

export default store