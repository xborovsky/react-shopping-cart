import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { fetchProducts } from '../api/api';
import Product from './Product';
import ProductsCounter from './ProductsCounter';
import Order from './Order';
import * as constants from '../utils/constants';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts : [],
            orderBy : constants.ORDER_PRICE_ASC
        };
    }

    componentDidMount() {
        this.doFetchProducts(this.props.selectedSizes);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSizes !== this.props.selectedSizes) {
            this.doFetchProducts(nextProps.selectedSizes);
        }
    }

    doFetchProducts(sizes) {
        fetchProducts(sizes, this.state.orderBy)
            .then(products => this.setState({filteredProducts : products}));
    }

    handleOrderByChanged = (e) => {
        const newOrderBy = e.target.value;
        this.setState({orderBy : newOrderBy}, () => this.doFetchProducts(this.props.selectedSizes));
    }

    render() {
        const { filteredProducts, orderBy } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <ProductsCounter cnt={filteredProducts.length} />
                    <Order orderBy={orderBy} onChange={this.handleOrderByChanged} />
                </div>
                <div className="row display-flex product-items">
                    { filteredProducts.map(product => (
                        <div className="col-12, col-md-4 col-md-3" key={product.id}>
                            <Product product={product} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

}

Products.propTypes = {
    selectedSizes : PropTypes.arrayOf(
        PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL'])
    )
};

export default Products;