import React from 'react';
import PropTypes from 'prop-types';
import Button from './common/Button';

const getFormattedPrice = (price) => {
    const priceStr = price.toFixed(2).toString();
    return (
        <span>
            {priceStr.substring(0, priceStr.indexOf('.'))}
            <span className="decimal-part">
                {priceStr.substring(priceStr.indexOf('.'))}
            </span>
        </span>
    );
};

const Product = ({product}) =>
    <div className="product-item">
        <img className="img-fluid" alt={product.title} src={`/img/${product.sku}.jpg`} />
        <div className="product-item-info">
            <span className="product-item-title">{product.title}</span>
            <span className="product-item-price">
                <span className="product-item-price-currency">{product.currencyFormat}</span>
                <span>{getFormattedPrice(product.price)}</span>
            </span>
            <Button classNames="btn btn-block btn-custom" title="Add to cart" />
        </div>
    </div>
;

Product.propTypes = {
    product : PropTypes.object
};

export default Product;