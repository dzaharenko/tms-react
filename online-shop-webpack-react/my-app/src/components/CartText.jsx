import React from "react";

import PropTypes from 'prop-types';

import {withRouter} from 'react-router';

import cartText from "../styles/JSS/cartText";

const CartText = ({history, product, variant}) => {
  const classes = cartText();
  const handleClick = (event) => {
    event.preventDefault();
    history.push(`/catalog/${product.id}`);
  };

  return (
    <div className={classes.cart__text}>
      {variant === 'catalog'
        ? <a href="#" onClick={handleClick} className={classes.cart__title}>{product.title}</a>
        : <p>{product.title}</p>
      }
      <div className={classes.cart__desc} dangerouslySetInnerHTML={{__html: product.description}}/>
    </div>
  );
};

CartText.displayName = 'CartText';

CartText.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default withRouter(CartText);
