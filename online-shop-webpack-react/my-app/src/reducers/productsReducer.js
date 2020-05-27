import {handleActions} from 'redux-actions';
import {sortProducts, searchProducts} from "../actions";

import {productsState} from '../constants/defaultState';
import sortArray from "../helpers/sortArray";

export default {
  products: handleActions({
    [sortProducts]: (state, {payload}) => {
      const products = {...state};
      return {...state, current: sortArray(products.current, payload)};
    },
    [searchProducts]: (state, {payload = ''}) => {
      const reg = new RegExp(payload.searchString, 'i');
      return {...state, current: state.origin.filter(product => reg.test(product.title))};
    },
  }, productsState),
};
