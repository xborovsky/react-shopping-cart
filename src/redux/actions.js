import * as constants from './constants';

export const addProductToCart = (product) => ({
    type : constants.ADD_TO_SHOPPING_CART,
    product
});

export const removeProductFromCart = (sku) => ({
    type : constants.REMOVE_FROM_SHOPPING_CART,
    sku
});