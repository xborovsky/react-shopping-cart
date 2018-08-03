import React from 'react';
import PropTypes from 'prop-types';

const Button = ({title, classNames, onClick}) =>
    <button className={classNames} onClick={onClick}>{title}</button>
;

Button.propTypes = {
    title : PropTypes.string.isRequired,
    classNames : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired
};

export default Button;