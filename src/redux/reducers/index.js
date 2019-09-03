import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import authReducer from './authReducer';
import socialReducer from './socialReducer';

export default combineReducers({
  article: articleReducer,
  auth: authReducer,
  social: socialReducer,
});
