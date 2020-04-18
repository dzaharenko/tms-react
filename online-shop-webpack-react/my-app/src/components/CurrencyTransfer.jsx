import React, {Component} from "react";

import '../styles/components/ProductsHeader.css';

export default class CurrencyTransfer extends Component {
    constructor(props) {
        super(props);
        this.state = {active: false};

        this.valueClick = this.valueClick.bind(this);
    }

    componentDidMount() {
        fetch('http://www.nbrb.by/api/exrates/rates/840?parammode=1')
            .then(response => response.json())
            .then(products => {
                this.setState({products});
            })
            .catch(error => console.log(error));
    }

    valueClick(event) {
        event.preventDefault();
        this.setState(prevState => ({active: !prevState.active}));
    }

    render() {
        const {active} = this.state;
        const value = active ? 'BYN' : 'USD';
        return (
            <div>Сurrency: <a id="" href="#" className="products__value" onClick={this.valueClick}>{value}</a></div>
        )
    }
};
