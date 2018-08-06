import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/price-format';
import { connect } from 'react-redux';
import { removeProductFromCart } from '../../redux/actions';

const ShoppingCartItem = ({product, onItemRemove}) =>
    <div className="row shopping-cart-item vcenter">
        <div className="col-11">
            <div className="row vcenter">
                <div className="col-2">
                    <img className="img-fluid" alt={product.title} src={`/img/${product.sku}.jpg`} />
                </div>
                <div className="col-5">
                    <strong>{product.title}</strong><br />
                    {product.style || ''}
                </div>
                <div className="col-2">
                    <strong>{product.quantity}x</strong>
                </div>
                <div className="col-3">
                    <div className="price">
                        <span className="product-item-price-currency">{product.currencyFormat}</span>
                        <span>{formatPrice(product.price * product.quantity)}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-1">
            <i className="fas fa-times remove-item-icon" onClick={() => onItemRemove(product.sku)} title="Remove item from shopping cart"></i>
        </div>
        <hr />
    </div>
;

ShoppingCartItem.propTypes = {
    product : PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    onItemRemove : (sku) => dispatch(removeProductFromCart(sku))
});

export default connect(null, mapDispatchToProps)(ShoppingCartItem);