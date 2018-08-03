import React from 'react';
import PropTypes from 'prop-types';
import * as constants from '../utils/constants';

const Order = ({orderBy, onChange}) =>
    <div className="col-12 col-md-3 text-right">
        <select className="form-control" value={orderBy} onChange={onChange}>
            <option value={constants.ORDER_PRICE_ASC}>Lowest to highest</option>
            <option value={constants.ORDER_PRICE_DESC}>Highest to lowest</option>
        </select>
    </div>
;

Order.propTypes = {
    orderBy : PropTypes.oneOf(['price-asc', 'price-desc']).isRequired,
    onChange : PropTypes.func.isRequired
};

export default Order;