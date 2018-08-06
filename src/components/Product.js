import React from 'react';
import PropTypes from 'prop-types';
import Button from './common/Button';
import { connect } from "react-redux";
import { addProductToCart } from '../redux/actions';

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

const Product = ({product, onItemAddedToCart}) =>
    <div className="product-item">
        <img className="img-fluid" alt={product.title} src={`/img/${product.sku}.jpg`} />
        <div className="product-item-info">
            <span className="product-item-title">{product.title}</span>
            <span className="product-item-price">
                <span className="product-item-price-currency">{product.currencyFormat}</span>
                <span>{getFormattedPrice(product.price)}</span>
            </span>
            <Button classNames="btn btn-block btn-custom" title="Add to cart" onClick={() => onItemAddedToCart(product)} />
        </div>
    </div>
;

Product.propTypes = {
    product : PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
    onItemAddedToCart : (product) => dispatch(addProductToCart(product))
});

export default connect(null, mapDispatchToProps)(Product);