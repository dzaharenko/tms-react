import {combineReducers} from 'redux';

import basketReducer from '../reducers/basketReducer';
import loadReducer from '../reducers/loadReducer';
import productsReducer from '../reducers/productsReducer';
import appReducer from "./appReducer";

const reducers = combineReducers({
  ...basketReducer,
  ...loadReducer,
  ...productsReducer,
  ...appReducer,
});

export default reducers;
