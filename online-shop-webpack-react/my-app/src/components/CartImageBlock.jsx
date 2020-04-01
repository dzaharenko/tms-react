import React from "react";

import PropTypes from 'prop-types';

import '../styles/components/CartImageBlock.css';

const CartImageBlock = ({imageLink, title}) => {
    return <div className="cart__image-block">
        <img className="cart__image" src={imageLink} alt={title}/>
    </div>
};

export default CartImageBlock;

CartImageBlock.propTypes = {
    imageLink: PropTypes.string,
    title: PropTypes.string,
};
