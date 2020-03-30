import React, { Component } from "react";

import '../styles/components/CartText.css';

export default class CartText extends Component {
    render() {
        return (
            <div className="cart__text">
                <div className="cart__title">{this.props.title}</div>
                <div className="cart__desc">{this.props.description}</div>
            </div>
        );
    }
}
