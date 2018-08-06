import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.css';
import { connect } from 'react-redux';

class ShoppingCart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { shoppingCart } = this.props;
        return (
            <div className="shopping-cart">
                <i className="fas fa-shopping-cart"></i>
                <span className="badge">{shoppingCart ? shoppingCart.length : 0}</span>
            </div>
        );
    }

}

ShoppingCart.propTypes = {
    shoppingCart : PropTypes.arrayOf(PropTypes.number)
};

const mapStateToProps = (state) => ({
    shoppingCart : state.shoppingCart
});

export default connect(mapStateToProps)(ShoppingCart);