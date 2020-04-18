import React, {Component} from "react";

import '../styles/components/ProductsHeader.css';

import CurrencyTransfer from './CurrencyTransfer.jsx';

export default class ProductsHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { sortDirection: 'Desc' };

        this.sortClick = this.sortClick.bind(this);
    }

    sortClick(event) {
        event.preventDefault();
        this.setState(prevState => ({sortDirection: prevState.sortDirection === 'Asc' ? 'Desc' : 'Asc'}), () => {
            this.props.onSort(this.state.sortDirection);
        });
    }

    render() {
        return (
            <div className="products__header">
                <h3>Electronics</h3>
                <div className="products__line">Sort by price: <a id="sort" href="#" className="products__sort" onClick={this.sortClick}>{this.state.sortDirection}</a></div>
                <CurrencyTransfer/>
            </div>
        )
    }
};


