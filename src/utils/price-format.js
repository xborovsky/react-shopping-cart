import React from 'react';

export const formatPrice = (price) => {
    const priceStr = price.toFixed(2).toString();
    return (
        <span>
            {priceStr.substring(0, priceStr.indexOf('.'))}
            <span className="decimal-part">
                {priceStr.substring(priceStr.indexOf('.'))}
            </span>
        </span>
    );
};