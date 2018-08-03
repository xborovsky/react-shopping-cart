export const fetchProducts = (sizes) => {
    return fetch('products.json')
        .then(handleError)
        .then(response => response.json())
        .then(json => json.products)
        .then(products => {
            if (!sizes || !sizes.length) {
                return products;
            }

            return products.filter(product =>
                sizes.some(size =>
                    product.availableSizes.indexOf(size) !== -1
                )
            );
        });
};

function handleError(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}