import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from '../reducers'
import productsD from "../constants/ProductsData";

const store = createStore(
  reducers,
  {products: {origin: productsD, current: productsD}},
  composeWithDevTools()
);

export default store;
