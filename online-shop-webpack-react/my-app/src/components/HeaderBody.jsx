import React, { Component } from 'react';

import '../styles/components/HeaderBody.css';
import '../styles/index.css';

import Basket from './Basket.jsx';
import Logo from './Logo.jsx';
import Search from './Search.jsx';

export default class HeaderBody extends Component {
    render() {
        return (
            <div className="header">
                <div className="container header__container">
                    <Logo />
                    <Search />
                    <Basket />
                </div>
            </div>
        );
    }
}
