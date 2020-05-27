import React from 'react';

import logo from '../styles/JSS/logo.js';

import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

const Logo = ({history}) => {
  const classes = logo();
  const handleClick = () => {
    history.push('/');
  };
  return <Link to="/" onClick={handleClick} className={classes.header__logo}>The best shop</Link>

};

Logo.displayName = 'Logo';

export default withRouter(Logo);
