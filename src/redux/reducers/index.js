import { combineReducers } from 'redux';
import LandingPageReducer from './landingPageReducer';
import authReducer from './authReducer';
import passwordResetReducer from './passwordResetReducer';
import singleArticleReducer from './articleReducer';


export default combineReducers({
  article: LandingPageReducer,
  auth: authReducer,
  requestReset: passwordResetReducer,
  singleArticle: singleArticleReducer,
});
