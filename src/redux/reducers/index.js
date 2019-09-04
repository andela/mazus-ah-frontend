import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import authReducer from './authReducer';
import passwordResetReducer from './passwordResetReducer';
import socialReducer from './socialReducer';

export default combineReducers({
  article: articleReducer,
  auth: authReducer,
  requestReset: passwordResetReducer,
  social: socialReducer,
});
