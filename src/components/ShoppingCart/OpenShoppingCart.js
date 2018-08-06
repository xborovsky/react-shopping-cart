import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartItem from './ShoppingCartItem';
import { formatPrice } from '../../utils/price-format';

const getTotalPrice = (items) => {
    let total = 0;

    for (let i=0; i<items.length; i++) {
        total += items[i].price * items[i].quantity;
    }

    return total;
};

const OpenShoppingCart = ({items, onOpenChange, isOpen}) =>
    <div className={`shopping-cart-open ${isOpen ? 'visible' : ''}`}>
        <i className="fas fa-times shopping-cart-close-icon" onClick={onOpenChange} title="Close shopping cart"></i>
        <h3 className="text-center">Shopping cart</h3>
        <div className="shopping-cart-items">
            {
                items.map(item => <ShoppingCartItem key={item.id} product={item} />)
            }
        </div>
        <div className="shopping-cart-summary">
            <div className="row vcenter">
                <div className="col-3">
                    &nbsp;
                </div>
                <div className="col-5">
                    <span className="total-items">Total items: {items.length}</span>
                </div>
                <div className="col-3">
                    <div className="price">
                        <span className="product-item-price-currency">{items.length ? items[0].currencyFormat : ''}</span>
                        <span>{formatPrice(items.length ? getTotalPrice(items) : 0)}</span>
                    </div>
                </div>
                <div className="col-1">
                    &nbsp;
                </div>
            </div>
        </div>
    </div>
;

OpenShoppingCart.propTypes = {
    items : PropTypes.array.isRequired,
    onOpenChange : PropTypes.func.isRequired,
    isOpen : PropTypes.bool
};

export default OpenShoppingCart;