import * as constants from './constants';

export const initialState = {
    shoppingCart : []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.ADD_TO_SHOPPING_CART:
            return {...state, shoppingCart : [...state.shoppingCart, action.product.sku]};
        case constants.REMOVE_FROM_SHOPPING_CART:
            return {...state, shoppingCart : state.shoppingCart.splice(state.shoppingCart.indexOf(action.sku), 1)}
        default:
            return state;
    }
};

export default reducer;