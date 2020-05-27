import React from "react";

import mainBody from '../styles/JSS/mainBody';

import ProductsHeader from '../components/ProductsHeader.jsx';
import Products from './Products.jsx';

const MainBody = () => {
  const classes = mainBody();
  return (
    <main className={classes.container}>
      <ProductsHeader/>
      <Products/>
    </main>
  )
};

MainBody.displayName = 'MainBody';

export default MainBody;

