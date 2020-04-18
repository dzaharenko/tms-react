import React, {Component} from "react";

import PropTypes from 'prop-types';

import '../styles/components/MainBody.css';
import '../styles/index.css';

import ProductsHeader from './ProductsHeader.jsx';
import Products from './Products.jsx';
import productsD from "../constants/ProductsData";
import sortArray from '../helpers/sortArray.js';

export default class MainBody extends Component {
    constructor(props) {
        super(props);

        this.state = {products: productsD};
        this.handleSort = this.handleSort.bind(this);
    }

    handleSort(sortDirection) {
        this.setState(prevState => ({products: sortArray(prevState.products, sortDirection)}));
    }

    render() {
        console.log(this.state.products);
        return (
            <main className="container">
                <ProductsHeader onSort={this.handleSort}/>
                <Products products={this.state.products} {...this.props} />
            </main>
        )
    }
};
