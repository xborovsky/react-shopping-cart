import React from 'react';
import PropTypes from 'prop-types';

const ProductsCounter = ({cnt}) =>
    <div className="col-12 col-md-9">
        {cnt} product{cnt === 0 || cnt > 1 ? '(s)' : ''} found
    </div>
;

ProductsCounter.propTypes = {
    cnt : PropTypes.number.isRequired
};

export default ProductsCounter;