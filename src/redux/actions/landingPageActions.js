/* eslint-disable import/prefer-default-export */
import Toastr from 'toastr';
import API_SERVICE from '../../config/API';
import {
  SET_TAGS, LOADING, SET_ARTICLES, SET_TRENDING_ARTICLES,
} from './types/landingPage';

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

export const getTags = () => async (dispatch) => {
  // dispatch({ type: LOADING, payload: true });
  try {
    const response = await API_SERVICE.get('/articles/tags');
    const { tags } = response.data;
    dispatch(setTags(tags));
    return tags;
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    Toastr.error(message);
    return true;
  }
};

export const loaded = payload => (dispatch) => {
  dispatch({
    type: LOADING,
    payload,
  });
};

export const getArticlesByCategory = (tags, tagsIndex) => async (dispatch) => {
  try {
    tags.map(async (tag) => {
      if (tags.indexOf(tag) >= tagsIndex && tags.indexOf(tag) <= tagsIndex + 9) {
        const url = `/articles?tag=${tag}&limit=2`;
        const res = await API_SERVICE.get(url);
        dispatch(setArticles(res.data));
        if (tags.indexOf(tag) === 9) {
          dispatch({ type: LOADING, payload: false });
        }
      }
    });
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    Toastr.error(message);
  }
};

export const getTrendingArticles = () => async (dispatch) => {
  try {
    const response = await API_SERVICE.get('/articles/trends');
    const { trends } = response.data;
    console.log('TRENDS FROM ACTION', trends);
    dispatch(setTrendingArticles(trends));
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    Toastr.error(message);
  }
};
