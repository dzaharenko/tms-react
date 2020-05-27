import {createActions} from 'redux-actions';

export const {
  addToBasket,
  removeFromBasket
} = createActions(
  'ADD_TO_BASKET',
  'REMOVE_FROM_BASKET'
);

/*import {ADD_TO_BASKET, REMOVE_FROM_BASKET} from '../constants/actionTypes';

const defaultPayload = {productId: '', priceValue: 0};*/

/*export const addToBasket = (payload = defaultPayload) => ({
  type: ADD_TO_BASKET,
  payload,
});

export const removeFromBasket = (payload = defaultPayload) => ({
  type: REMOVE_FROM_BASKET,
  payload,
});*/
