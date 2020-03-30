import React, { Component } from "react";

import '../styles/components/CartPriceBlock.css';

export default class CartPriceBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Add to Basket' };
    }
    render() {
        const { text } = this.state;
        return (
            <div className="cart__price-block">
                <div className="cart__price">{this.props.price.value}</div>
                <a href="#" className="cart__button">{text}</a>
            </div>
        );
    }
}
