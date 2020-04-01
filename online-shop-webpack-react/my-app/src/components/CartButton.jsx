import React, { Component } from "react";

import PropTypes from 'prop-types';

import '../styles/components/CartButton.css';
import classNames from 'classnames';

export default class CartButton extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState(prevState => ({ active: !prevState.active }),() => {
            this.props.onClick(this.state.active);
        });
    }

    render() {
        const { active } = this.state;
        const text = active ? 'Remove from Basket' : 'Add to Basket';
        return (
                <a href="#" className={classNames('cart__button', { _active: active })} onClick={this.handleClick}>{text}</a>
        );
    }
}

CartButton.propTypes = {
    handleClick: PropTypes.func,
};
