import {handleActions} from 'redux-actions';
import {switchTheme} from "../actions";

import {appState} from '../constants/defaultState';

export default {
  app: handleActions({
    [switchTheme]: state => ({...state, lightTheme: !state.lightTheme }),
  }, appState),
};