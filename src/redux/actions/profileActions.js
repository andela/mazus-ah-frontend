import API_SERVICE from '@Utils/API';
import {
  GET_PROFILE,
  PROFILE_LOADING,
  PROFILE_ERROR,
  PROFILE_ARTICLES_LOADING,
  GET_PROFILE_ARTICLES,
} from './types/profileType';

const flattenObject = (obj, prefix = '') => Object.keys(obj).reduce((acc, k) => {
  const pre = prefix.length ? `${prefix}` : '';
  if (typeof obj[k] === 'object' && obj[k] !== null) Object.assign(acc, flattenObject(obj[k], pre + k));
  else acc[pre + k] = obj[k];
  return acc;
}, {});

export const fetchUserProfile = id => async (dispatch) => {
  dispatch({ type: PROFILE_LOADING, payload: true });
  try {
    const userProfile = await API_SERVICE.get(`/profiles/${id}`);
    const userFollowers = await API_SERVICE.get(`/profiles/followers/${id}`);
    const userFollowing = await API_SERVICE.get(`/profiles/followings/${id}`);
    const profile = flattenObject({
      ...userProfile.data.profile,
      userFollowers: userFollowers.data.follows.userFollowers.length,
      userFollowing: userFollowing.data.follows.userFollowings.length,
    });
    dispatch({ type: GET_PROFILE, payload: profile });
  } catch (error) {
    dispatch({ type: PROFILE_ERROR, payload: error.response });
  }
};

export const fetchProfileArticles = id => async (dispatch) => {
  dispatch({ type: PROFILE_ARTICLES_LOADING, payload: true });
  try {
    const userArticles = await API_SERVICE.get(`/articles/author/${id}`);
    dispatch({ type: PROFILE_ARTICLES_LOADING, payload: false });
    return dispatch({ type: GET_PROFILE_ARTICLES, payload: userArticles.data.articles });
  } catch (err) {
    dispatch({ type: PROFILE_ARTICLES_LOADING, payload: false });
    return dispatch({ type: PROFILE_ERROR, payload: err.response });
  }
};

export const fetchUserOwnProfileArticles = () => async (dispatch) => {
  dispatch({ type: PROFILE_ARTICLES_LOADING, payload: true });
  try {
    const userArticles = await API_SERVICE.get('/users/articles');
    dispatch({ type: PROFILE_ARTICLES_LOADING, payload: false });
    return dispatch({ type: GET_PROFILE_ARTICLES, payload: userArticles.data.articles });
  } catch (err) {
    dispatch({ type: PROFILE_ARTICLES_LOADING, payload: false });
    return dispatch({ type: PROFILE_ERROR, payload: err.response });
  }
};
