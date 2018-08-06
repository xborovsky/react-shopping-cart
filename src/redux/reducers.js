import * as constants from './constants';

export const initialState = {
    shoppingCart : []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.ADD_TO_SHOPPING_CART:
            const idx = state.shoppingCart.findIndex((item) => item.sku === action.product.sku);
            const shoppingCartCopy = [...state.shoppingCart];
            if (idx !== -1) {
                shoppingCartCopy[idx].quantity++;
                return {...state, shoppingCart : shoppingCartCopy};
            } else {
                action.product.quantity = 1;
                return {...state, shoppingCart : [...state.shoppingCart, action.product]};
            }

        case constants.REMOVE_FROM_SHOPPING_CART:
            const idx2 = state.shoppingCart.findIndex((item) => item.sku === action.sku);
            const shoppingCartCopy2 = [...state.shoppingCart];
            shoppingCartCopy2.splice(idx2, 1);
            return {...state, shoppingCart : shoppingCartCopy2};

        default:
            return state;
    }
};

export default reducer;