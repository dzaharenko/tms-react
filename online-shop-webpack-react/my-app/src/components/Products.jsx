import React, {Component} from "react";

import '../styles/components/Products.css';

import productsD from '../constants/ProductsData.js';
import numberCost from '../helpers/numberCost.js';

import CartImageBlock from './CartImageBlock.jsx';
import CartText from './CartText.jsx';
import CartButton from './CartButton.jsx';

export default class Products extends Component {
    constructor(props) {
        super(props);

        this.handleBasket = this.handleBasket.bind(this);
    }

    handleBasket(product) {
        return active => {
            if (active) {
                this.props.addToBasket(product);
            } else {
                this.props.removeFromBasket(product);
            }
        }
    }

    render() {
        return (
            this.props.products.map(product => (
                    <div className="cart" key={product.id}>
                        <CartImageBlock imageLink={product.imageLink}/>
                        <CartText title={product.title} description={product.description}/>
                        <div className="cart__price-block">
                            <div className="cart__price">{numberCost(product.price.value)}</div>
                            <CartButton onClick={this.handleBasket(product)}/>
                        </div>
                    </div>
                )
            )
        );
    }
}
