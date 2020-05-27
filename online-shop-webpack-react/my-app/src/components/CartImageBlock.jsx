import React from "react";

import PropTypes from 'prop-types';

import cartImageBlock from '../styles/JSS/cartImageBlock';

const CartImageBlock = ({imageLink, title}) => {
  const classes = cartImageBlock();
  return <div className={classes.cart__image_block}>
    <img className={classes.cart__image} src={imageLink} alt={title}/>
  </div>
};

CartImageBlock.displayName = 'CartImageBlock';

CartImageBlock.propTypes = {
  imageLink: PropTypes.string,
  title: PropTypes.string,
};

export default CartImageBlock;
