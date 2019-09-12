import { combineReducers } from 'redux';
import LandingPageReducer from './landingPageReducer';
import authReducer from './authReducer';
import passwordResetReducer from './passwordResetReducer';
import socialReducer from './socialReducer';
import singleArticleReducer from './articleReducer';
<<<<<<< HEAD
import profileReducer from './profileReducer';
=======
import newArticleReducer from './newArticleReducer';

>>>>>>> connect modal component to redux

export default combineReducers({
  article: LandingPageReducer,
  auth: authReducer,
  requestReset: passwordResetReducer,
  social: socialReducer,
  singleArticle: singleArticleReducer,
<<<<<<< HEAD
  profile: profileReducer,
=======
  newArticle: newArticleReducer,
>>>>>>> connect modal component to redux
});
