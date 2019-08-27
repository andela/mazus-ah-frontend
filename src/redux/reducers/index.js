import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import authReducer from './authReducer';

export default combineReducers({
  article: articleReducer,
  auth: authReducer,
});
