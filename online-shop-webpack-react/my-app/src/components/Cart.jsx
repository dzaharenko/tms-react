import React, {useEffect, useState} from "react";
import {compose} from "redux";
import {connect} from 'react-redux';
import {withRouter, useParams} from "react-router";

import PropTypes from 'prop-types';

import productsStyle from '../styles/JSS/products';

import numberCost from "../helpers/numberCost";

import CartImageBlock from "./CartImageBlock";
import CartText from "./CartText";
import CartButton from "./CartButton";

import {
  addToBasket,
  removeFromBasket
} from '../actions';

const Cart = ({products, variant, ...props}) => {
  const classes = productsStyle();
  const [product = {}, setProduct] = useState({price: {}});

  const params = useParams();

  useEffect(() => {
    const {id} = params;
    if (products.length && id) {
      const stateProduct = products.find(item => item.id === id);

      setProduct(stateProduct);
    } else if (props.product) {
      setProduct(props.product);
    }
  }, []);

  const handleBasket = ({id, price}) => {
    return active => {
      if (active) {
        props.addToBasket({productId: id, priceValue: price.value});
      } else {
        props.removeFromBasket({productId: id, priceValue: price.value});
      }
    }
  };

  return (
    <>
      <div className={classes.cart} key={product.id}>
        <CartImageBlock imageLink={product.imageLink}/>
        <CartText product={product} variant={variant}/>
        <div className={classes.cart__price_block}>
          <div className={classes.cart__price}>{numberCost(product.price.value)} {product.price.currency}</div>
          <CartButton onClick={handleBasket(product)}/>
        </div>
      </div>
    </>
  );
};

Cart.displayName = 'Cart';

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  variant: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  products: state.products.current,
});

const mapDispatchToProps = {
  addToBasket,
  removeFromBasket,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Cart);
