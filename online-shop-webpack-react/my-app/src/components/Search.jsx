import React from 'react';

import PropTypes from 'prop-types';

import search from '../styles/JSS/search';

import {connect} from "react-redux";
import {searchProducts} from "../actions";

const Search = ({searchProducts, ...props}) => {
  const classes = search();

  const handleInput = (event) => {
    event.preventDefault();
    searchProducts({productsOrigin: props.productsOrigin, searchString: event.target.value});
  };

  return <form>
    <input className={classes.header__search} type="text" placeholder="Search" onInput={handleInput}/>
  </form>
};

Search.displayName = 'Search';

Search.propTypes = {
  searchProducts: PropTypes.func.isRequired,
  productsOrigin: PropTypes.array,
};

const mapStateToProps = state => ({
  productsOrigin: state.productsOrigin,
});

const mapDispatchToProps = {
  searchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
