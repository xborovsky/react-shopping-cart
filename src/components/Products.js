import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { fetchProducts } from '../api/api';
import Product from './Product';
import ProductsCounter from './ProductsCounter';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredProducts : []
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
        fetchProducts(sizes)
            .then(products => this.setState({filteredProducts : products}));
    }

    render() {
        const { filteredProducts } = this.state;

        return (
            <div className="container">
                <ProductsCounter cnt={filteredProducts.length} />
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