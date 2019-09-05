/* eslint-disable import/prefer-default-export */
import Toastr from 'toastr';
import API_SERVICE from '@Utils/API';
import {
  SET_TAGS, LOADING, SET_ARTICLES, SET_TRENDING_ARTICLES, SET_ERROR,
} from '@Types/landingPage';

const setTags = payload => ({
  type: SET_TAGS,
  payload,
});
const setArticles = payload => ({
  type: SET_ARTICLES,
  payload,
});
const setTrendingArticles = payload => ({
  type: SET_TRENDING_ARTICLES,
  payload,
});
const setError = payload => ({
  type: SET_ERROR,
  payload,
});

export const getTags = () => async (dispatch) => {
  try {
    const response = await API_SERVICE.get('/articles/tags');
    const { tags } = response.data;
    dispatch(setTags(tags));
    return tags;
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    dispatch(setError(message));
    return Toastr.error(message);
  }
};

export const loaded = payload => (dispatch) => {
  dispatch({
    type: LOADING,
    payload,
  });
};

export const getArticlesByCategory = (tag, tags) => async (dispatch) => {
  try {
  /* istanbul ignore next-line */
    const url = `/articles?tag=${tag}&limit=2`;
    const res = await API_SERVICE.get(url);
    dispatch(setArticles(res.data));
    if (tags.indexOf(tag) === 9) {
      dispatch({ type: LOADING, payload: false });
    }
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    dispatch(setError(message));
    Toastr.error(message);
    Toastr.error(error);
  }
};

export const getTrendingArticles = () => async (dispatch) => {
  try {
    const response = await API_SERVICE.get('/articles/trends');
    const { trends } = response.data;
    dispatch(setTrendingArticles(trends));
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    dispatch(setError(message));
    Toastr.error(message);
    Toastr.error(error);
  }
};
