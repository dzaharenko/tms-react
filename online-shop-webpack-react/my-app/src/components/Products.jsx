import React, { Component } from "react";

import '../styles/components/Products.css';

import productsD from '../constants/ProductsData.js';

import CartImageBlock from './CartImageBlock.jsx';
import CartText from './CartText.jsx';
import CartPriceBlock from './CartPriceBlock.jsx';

export default class Products extends Component {
    render() {
        return (
            productsD.map(function (productsD) {
                return (
                    <div className="cart">
                        <CartImageBlock imageLink={productsD.imageLink} />
                        <CartText title={productsD.title} description={productsD.description} />
                        <CartPriceBlock price={productsD.price} />
                    </div>
                )
            })
        );
    }
}
