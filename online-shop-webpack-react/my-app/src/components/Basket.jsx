import React from 'react';

import PropTypes from 'prop-types';

import numberCost from '../helpers/numberCost.js';

import '../styles/components/Basket.css';

const Basket = ({count, amount}) => {
    return <div className="basket">
        <div>Basket<span id="count" className="basket__count">{count}</span></div>
        <div className="basket__amount">amount: <span id="amount">{numberCost(amount)}</span></div>
    </div>
};

Basket.propTypes = {
    count: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
};

export default Basket;
