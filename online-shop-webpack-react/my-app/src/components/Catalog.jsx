import React from "react";

import {connect} from 'react-redux';

import Cart from "./Cart.jsx";

const Catalog = ({products}) => (
  <>
    {products.map(product => (
        <Cart
          key={product.id}
          product={product}
          variant="catalog"
        />
      )
    )}
  </>
);

Catalog.displayName = 'Catalog';

const mapStateToProps = state => ({
  products: state.products.current || [],
});

export default connect(mapStateToProps)(Catalog);
