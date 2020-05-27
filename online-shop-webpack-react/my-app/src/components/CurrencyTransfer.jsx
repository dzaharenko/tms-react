import React, {Component} from "react";

import '../styles/components/ProductsHeader.css';

class CurrencyTransfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            load: true,
            items: []
        };

        this.valueClick = this.valueClick.bind(this);
    }

    valueClick() {
        Promise.all([
            fetch('http://www.nbrb.by/api/exrates/rates/840?parammode=1')
                .then(response => response.json())
        ])
            .then(([products, nbrb]) => {
                this.setState({
                    products: products.map(product => {
                        product.price.value *= nbrb.Cur_OfficialRate;
                        product.price.currency = 'BYN';

                        return product;
                    }),
                    load: false,
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        const value = this.state.active ? 'USD' : 'BYN';
        return (
            <div>Сurrency: <a id="" href="#" className="products__value" onClick={this.valueClick}>{value}</a></div>
        )
    }
};

CurrencyTransfer.displayName = 'CurrencyTransfer';

export default CurrencyTransfer;





/*    componentDidMount() {
        fetch('http://www.nbrb.by/api/exrates/rates/840?parammode=1')
            .then(response => response.json())
            .then(products => {
                this.setState({products});
            })
            .catch(error => console.log(error));
    }*/
