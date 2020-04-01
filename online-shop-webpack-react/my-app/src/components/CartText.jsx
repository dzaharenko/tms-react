import React from "react";

import PropTypes from 'prop-types';

import '../styles/components/CartText.css';

const CartText = ({title, description}) => {
    return <div className="cart__text">
        <div className="cart__title">{title}</div>
        <div className="cart__desc" dangerouslySetInnerHTML={{__html: description}}/>
    </div>
};

export default CartText;

CartText.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};
