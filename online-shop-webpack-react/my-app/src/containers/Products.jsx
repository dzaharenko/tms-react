import React from "react";
import {Route, Switch} from "react-router-dom";

import Catalog from '../components/Catalog.jsx'
import Cart from '../components/Cart.jsx';
import NotFound from "../components/NotFound";

const Products = () => (
  <section>
    <Switch>
      <Route path="/" exact/>
      <Route path="/catalog/:id" component={Cart}/>
      <Route path="/catalog" component={Catalog}/>
      <Route component={NotFound}/>
    </Switch>
  </section>
);

Products.displayName = 'Products';

export default Products;

