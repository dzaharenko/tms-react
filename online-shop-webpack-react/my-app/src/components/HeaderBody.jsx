import React from 'react';

import PropTypes from 'prop-types';

import '../styles/components/HeaderBody.css';
import '../styles/index.css';

import Basket from './Basket.jsx';
import Logo from './Logo.jsx';
import Search from './Search.jsx';

const HeaderBody = ({ basket }) => {
        const {count, amount} = basket;
        return <div className="header">
            <div className="container header__container">
                <Logo/>
                <Search/>
                <Basket count={count} amount={amount}/>
            </div>
        </div>
};

export default HeaderBody;

HeaderBody.propTypes = {
    count: PropTypes.number,
    amount: PropTypes.number,
};

