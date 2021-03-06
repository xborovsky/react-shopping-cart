import React from 'react';
import PropTypes from 'prop-types';
import Button from './common/Button';
import { connect } from "react-redux";
import { addProductToCart } from '../redux/actions';
import { formatPrice } from '../utils/price-format';

const Product = ({product, onItemAddedToCart}) =>
    <div className="product-item">
        <img className="img-fluid" alt={product.title} src={`/img/${product.sku}.jpg`} />
        <div className="product-item-info">
            <span className="product-item-title">{product.title}</span>
            <span className="product-item-price">
                <span className="product-item-price-currency">{product.currencyFormat}</span>
                <span>{formatPrice(product.price)}</span>
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