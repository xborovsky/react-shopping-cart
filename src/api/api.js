import * as constants from '../utils/constants';

export const fetchProducts = (sizes, orderBy) => {
    return fetch('products.json')
        .then(handleError)
        .then(response => response.json())
        .then(json => json.products)
        .then(products => {
            if (!sizes || !sizes.length) {
                return sortProducts(products, orderBy);
            }

            const filteredArr = products.filter(product =>
                sizes.some(size =>
                    product.availableSizes.indexOf(size) !== -1
                )
            );
            return sortProducts(filteredArr, orderBy);
        });
};

const sortProducts = (products, orderBy) => {
    return products.sort((product1, product2) => {
        switch (orderBy) {
            case constants.ORDER_PRICE_ASC:
                return product1.price - product2.price;
            case constants.ORDER_PRICE_DESC:
                return product2.price - product1.price;
            default : return 0;
        }

    });
}

function handleError(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}