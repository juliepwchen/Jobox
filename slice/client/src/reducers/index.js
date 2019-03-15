import { combineReducers } from 'redux';

import qaReducer from './qaReducer';

export default combineReducers({
  qaState: qaReducer
});