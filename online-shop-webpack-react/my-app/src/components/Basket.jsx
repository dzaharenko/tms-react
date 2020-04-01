import React from 'react';

import PropTypes from 'prop-types';

import '../styles/components/Basket.css';

const Basket = ({count, amount}) => {
    return <div className="basket">
        <div>Basket<span id="count" className="basket__count">{count}</span></div>
        <div className="basket__amount">amount: <span id="amount">{amount} $</span></div>
    </div>
};

export default Basket;

Basket.propTypes = {
    count: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
};
