import { combineReducers } from 'redux';
import articleReducer from './landingPageReducer';

export default combineReducers({
  article: articleReducer,
});
