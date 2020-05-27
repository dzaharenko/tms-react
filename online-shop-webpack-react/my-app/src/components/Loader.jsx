import React from 'react';
import logo from '../assets/logo.svg';

import ProtoTypes from 'prop-types';
import withDisplay from "../HOCs/withDisplay";

import '../styles/components/Loader.css';

import classNames from 'classnames';

const Loader = ({active}) => {
  return (
    <div className={classNames('loader', {active})}>
      <img src={logo} className="loader_logo" alt="logo"/>
    </div>)
};

Loader.displayName = 'Loader';

Loader.propTypes = {
  active: ProtoTypes.bool.isRequired,
};

export default withDisplay(Loader);
