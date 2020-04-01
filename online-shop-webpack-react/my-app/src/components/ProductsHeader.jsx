import React from "react";

import '../styles/components/ProductsHeader.css';

const ProductsHeader = () => {
    return <div className="products__header">
        <h3>Electronics</h3>
        <div>Sort by price: <a id="sort" href="#" className="products__sort">Asc</a></div>
    </div>
};

export default ProductsHeader;
