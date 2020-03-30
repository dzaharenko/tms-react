import React, { Component } from "react";

import '../styles/components/CartImageBlock.css';

export default class CartImageBlock extends Component {
    render() {
        return (
            <div className="cart__image-block">
                <img className="cart__image" src={this.props.imageLink} alt={this.props.title} />
            </div>
        );
    }
}
