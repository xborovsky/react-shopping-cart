import React from 'react';
import PropTypes from 'prop-types';

const ClosedShoppingCart = ({numItems, onOpenChange, isOpen}) =>
    <div className={`shopping-cart ${isOpen ? '' : 'visible'}`} onClick={onOpenChange}>
        <i className="fas fa-shopping-cart"></i>
        <span className="badge">{numItems}</span>
    </div>
;

ClosedShoppingCart.propTypes = {
    numItems : PropTypes.number.isRequired,
    onOpenChange : PropTypes.func.isRequired,
    isOpen : PropTypes.bool
};

export default ClosedShoppingCart;