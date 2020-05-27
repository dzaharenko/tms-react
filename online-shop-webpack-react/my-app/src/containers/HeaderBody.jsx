import React, {useState} from 'react';
import {withRouter} from "react-router";
import {compose} from 'redux';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';

import headerBody from '../styles/JSS/headerBody';
import useRootStyles from '../styles';

import Basket from '../components/Basket.jsx';
import Logo from '../components/Logo.jsx';
import Search from '../components/Search.jsx';
import SubMenu from '../components/SubMenu.jsx';
import Modal from '../components/Modal.jsx';
import Cart from "../components/Cart";
import ThemeSwitcher from "./ThemeSwitcher";

const HeaderBody = ({basket, products}) => {
  useRootStyles();
  const classes = headerBody();
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
  };

  const {productIds = [], count = 0, amount = 0} = basket;
  const basketProducts = products.filter(product => productIds.includes(product.id));

  return (
    <div className={classes.header}>
      <div className={classes.container}>
        <div className={classes.header__container}>
          <Logo/>
          <SubMenu/>
          <Search/>
          <ThemeSwitcher />
          <Basket onClick={openModal} count={count} amount={amount}/>
          <Modal active={modalActive} onClose={closeModal}>
            {basketProducts.length
              ? basketProducts.map(product => (
                <Cart
                  key={product.id}
                  product={product}
                  variant="catalog"
                />
              ))
              : (
                <div>Basket is empty...</div>
              )
            }
          </Modal>
        </div>
      </div>
    </div>
  );
};

HeaderBody.displayName = 'HeaderBody';

HeaderBody.propTypes = {
  basket: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  basket: state.basket || {},
  products: state.products.current || [],
});

export default compose(
  withRouter,
  connect(mapStateToProps),
)(HeaderBody);
