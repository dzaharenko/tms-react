import React, { Component } from "react";

import PropTypes from 'prop-types';

import '../styles/components/Products.css';

import productsD from '../constants/ProductsData.js';

import CartImageBlock from './CartImageBlock.jsx';
import CartText from './CartText.jsx';
import CartButton from './CartButton.jsx';

export default class Products extends Component {
    constructor(props) {
        super(props);

        this.handleBasket = this.handleBasket.bind(this);
    }

    handleBasket(product) {
        return active => {
            if (active) {
                this.props.addToBasket(product);
            } else {
                this.props.removeFromBasket(product);
            }
        }
    }

    render() {
        console.log(this.props);
        return (
            productsD.map(product => (
                    <div className="cart" key={product.id}>
                        <CartImageBlock imageLink={product.imageLink} />
                        <CartText title={product.title} description={product.description} />
                        <div className="cart__price-block">
                            <div className="cart__price">{product.price.value}</div>
                            <CartButton onClick={this.handleBasket(product)} />
                        </div>
                    </div>
                )
            )
        );
    }
}

Products.propTypes = {
    handleBasket: PropTypes.func,
    id: PropTypes.symbol,
    imageLink: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
};
