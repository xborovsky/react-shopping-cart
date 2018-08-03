import React from 'react';
import PropTypes from 'prop-types';

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const SizeSelect = ({selected, onSelect}) =>
    <div className="row">
        {
            sizes.map(size => {
                const selectedClass = selected.indexOf(size) !== -1 ? 'selected' : '';
                return <span className={`size-item ${selectedClass}`}
                             onClick={onSelect}
                             key={size}>{size}</span>;
            })
        }
    </div>
;

SizeSelect.propTypes = {
    selected : PropTypes.arrayOf(
        PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL'])
    ),
    onSelect : PropTypes.func.isRequired
};

SizeSelect.defaultProps = {
    selected : []
};

export default SizeSelect;