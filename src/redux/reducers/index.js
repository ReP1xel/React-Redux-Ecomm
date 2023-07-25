import {combineReducers} from 'redux';
import {productReducer, selectedProductsReducer} from "./product-reducers";

const reducers = combineReducers({
    productReducer: productReducer,
    selectedProductsReducer : selectedProductsReducer
});

export default reducers;