import {createActions} from 'redux-actions';

export const {
  startLoader,
  endLoader
} = createActions(
  'START_LOADER',
  'END_LOADER'
);

/*
import {START_LOADER, END_LOADER} from '../constants/actionTypes';

export const startLoader = () => ({
  type: START_LOADER,
});

export const endLoader = () => ({
  type: END_LOADER,
});
*/
