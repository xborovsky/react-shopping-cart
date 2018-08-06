import React from 'react';
import PropTypes from 'prop-types';
import { ALL_SIZES } from '../utils/constants';

const sizes = ALL_SIZES;

const SizeSelect = ({selected, onSelect}) =>
    <div className="row">
        <div className="container">
            <strong>Sizes:</strong>
            <div className="row size-items">
            {
                sizes.map(size => {
                    const selectedClass = selected.indexOf(size) !== -1 ? 'selected' : '';
                    return <span className={`size-item ${selectedClass}`}
                                onClick={onSelect}
                                key={size}>{size}</span>;
                })
            }
            </div>
        </div>
    </div>
;

SizeSelect.propTypes = {
    selected : PropTypes.arrayOf(
        PropTypes.oneOf(sizes)
    ),
    onSelect : PropTypes.func.isRequired
};

SizeSelect.defaultProps = {
    selected : []
};

export default SizeSelect;