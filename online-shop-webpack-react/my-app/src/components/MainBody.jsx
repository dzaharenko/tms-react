import React, { Component } from "react";

import '../styles/components/MainBody.css';
import '../styles/index.css';

import ProductsHeader from './ProductsHeader.jsx';
import Products from './Products.jsx';

export default class MainBody extends Component {
    render() {
        return (
            <main className="container">
                <ProductsHeader />
                <Products />
            </main>
        );
    }
}
