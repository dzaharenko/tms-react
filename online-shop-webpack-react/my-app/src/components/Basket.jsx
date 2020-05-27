import React from 'react';

import PropTypes from 'prop-types';

import numberCost from '../helpers/numberCost.js';

import basket from '../styles/JSS/basket';

const Basket = ({count, amount, onClick}) => {
  const classes = basket();
  return (
    <div className={classes.basket} onClick={onClick}>
      <div>Basket<span id="count" className={classes.basket__count}>{count}</span></div>
      <div className={classes.basket__amount}>amount: <span id="amount">{numberCost(amount)}</span></div>
    </div>
  )
};

Basket.displayName = 'Basket';

Basket.propTypes = {
  count: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Basket;
