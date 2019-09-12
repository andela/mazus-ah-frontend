import { combineReducers } from 'redux';
import LandingPageReducer from './landingPageReducer';
import authReducer from './authReducer';
import passwordResetReducer from './passwordResetReducer';
import socialReducer from './socialReducer';
import singleArticleReducer from './articleReducer';
import newArticleReducer from './newArticleReducer';


export default combineReducers({
  article: LandingPageReducer,
  auth: authReducer,
  requestReset: passwordResetReducer,
  social: socialReducer,
  singleArticle: singleArticleReducer,
  newArticle: newArticleReducer,
});
