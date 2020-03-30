import React, { Component } from "react";

import '../styles/components/MainBody.css';
import '../styles/index.css';

import ProductsHeader from './ProductsHeader.jsx';
import Products from './Products.jsx';
import productsD from "../constants/ProductsData";

export default class MainBody extends Component {
    render() {
        const { addToBasket } = this.props.addToBasket;
        const { removeToBasket } = this.props.removeToBasket;
        return (
            <main className="container">
                <ProductsHeader />
                <Products products={productsD} addToBasket={addToBasket} removeToBasket={removeToBasket} />
            </main>
        );
    }
}
