import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.css';
import { connect } from 'react-redux';
import ClosedShoppingCart from './ClosedShoppingCart';
import OpenShoppingCart from './OpenShoppingCart';

class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen : false
        };
    }

    handleOpenChange = () => {
        this.setState({isOpen : !this.state.isOpen});
    };

    render() {
        const { shoppingCart } = this.props;
        const { isOpen } = this.state;

        return (
            isOpen ?
                <OpenShoppingCart onOpenChange={this.handleOpenChange} items={shoppingCart} /> :
                <ClosedShoppingCart numItems={shoppingCart ? shoppingCart.length : 0} onOpenChange={this.handleOpenChange} />
        );
    }

}

ShoppingCart.propTypes = {
    shoppingCart : PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state) => ({
    shoppingCart : state.shoppingCart
});

export default connect(mapStateToProps)(ShoppingCart);