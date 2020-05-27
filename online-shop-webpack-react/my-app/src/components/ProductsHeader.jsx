import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';

import productsHeader from '../styles/JSS/productsHeader';

import {sortProducts} from "../actions";

const ProductsHeader = ({...props}) => {
  const classes = productsHeader();
  const [sortDirection, setSortDirection] = useState('Desc');

  useEffect(() => {
    props.sortProducts(sortDirection);
  }, [sortDirection]);

  const sortClick = (event) => {
    event.preventDefault();
    setSortDirection(prevState => (prevState === 'Asc' ? 'Desc' : 'Asc'));
  };

  return (
    <div className={classes.products__header}>
      <h3>Electronics</h3>
      <div className={classes.products__line}>Sort by price: <a id="sort" href="#" className={classes.products__sort} onClick={sortClick}>{sortDirection}</a></div>
    </div>
  )
};

ProductsHeader.displayName = 'ProductsHeader';

const mapDispatchToProps = {
  sortProducts,
};

export default connect(null, mapDispatchToProps)(ProductsHeader);


