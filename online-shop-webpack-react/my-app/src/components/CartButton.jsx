import React, {Component, useEffect, useState} from "react";
import {connect} from "react-redux";

import PropTypes from 'prop-types';

import classNames from 'classnames';
import '../styles/components/CartButton.css';
import {useParams} from "react-router";
import {addToBasket, removeFromBasket} from "../actions";

const initialActiveData = {
  status: false,
  id: '',
  price: 0,
  loaded: false,
  activeData: false,
};

class CartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {active: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(prevState => ({active: !prevState.active}), () => {
      this.props.onClick(this.state.active);
    });
  }

  render() {
    const {active} = this.state;
    const text = active ? 'Remove from Basket' : 'Add to Basket';
    return (
      <a href="#" className={classNames('cart__button', {_active: active})} onClick={this.handleClick}>{text}</a>

    );
  }
}

CartButton.displayName = 'CartButton';

CartButton.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

const mapStateToProps = state => ({
  products: state.products.current,
});

const mapDispatchToProps = {
  addToBasket,
  removeFromBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);

















































/*const CartButton = ({...props}) => {
    const [active, setActive] = useState(false);
    const text = active ? 'Remove from Basket' : 'Add to Basket';

    useEffect(() => {
        props.onClick(active);
    },[active]);

    const handleClick = (event) => {
        event.preventDefault();
        setActive(prevState => !prevState);
    };

    return (
      <a href="#" className={classNames('cart__button', {_active: active})} onClick={handleClick}>{text}</a>
    );
};*/

/*const CartButton = ({addToBasket, removeFromBasket,  ...props}) => {
    const text = activeData ? 'Remove from Basket' : 'Add to Basket';

    const [activeData, setActiveData] = useState(initialActiveData);

    useEffect(() => {
        const {status, id, price, loaded} = initialActiveData;
        if (loaded) {
            if (status) {
                props.addToBasket({productId: id, priceValue: price.value});
            } else {
               props.removeFromBasket({productId: id, priceValue: price.value});
            }
        }
    }, [activeData]);

    useEffect(() => {
        props.onClick(activeData);
    },[activeData]);

    const handleClick = ({id, price}) => {
        return event => {
            event.preventDefault();
            setActiveData(prevState => ({status: !prevState.status, id, price, loaded: true}));
        }
    };

    return (
      <a href="#" className={classNames('cart__button', {_active: activeData})} onClick={handleClick}>{text}</a>
    );
};

CartButton.displayName = 'CartButton';

const mapStateToProps = state => ({
    products: state.products,
});

const mapDispatchToProps = {
    addToBasket,
    removeFromBasket,
};

CartButton.propTypes = {
    onClick: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);*/
