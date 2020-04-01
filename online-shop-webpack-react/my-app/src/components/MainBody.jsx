import React from "react";

import PropTypes from 'prop-types';

import '../styles/components/MainBody.css';
import '../styles/index.css';

import ProductsHeader from './ProductsHeader.jsx';
import Products from './Products.jsx';
import productsD from "../constants/ProductsData";

const MainBody = ({addToBasket, removeFromBasket}) => {
    return <main className="container">
        <ProductsHeader/>
        <Products products={productsD} addToBasket={addToBasket} removeFromBasket={removeFromBasket} />
    </main>
};

export default MainBody;

MainBody.propTypes = {
    products: PropTypes.array,
    addToBasket: PropTypes.func,
    removeFromBasket: PropTypes.func,
};
