import React, { Component } from "react";

import '../styles/components/ProductsHeader.css';

export default class ProductsHeader extends Component {
    render() {
        return (
            <>
                <div className="products__header">
                    <h3>Electronics</h3>
                    <div>Sort by price: <a id="sort" href="#" className="products__sort">Asc</a></div>
                </div>
            </>
        );
    }
}
