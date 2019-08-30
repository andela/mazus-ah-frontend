/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import Toastr from 'toastr';
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
  dispatch({ type: LOADING, payload: true });
  try {
    const response = await axios.get('https://mazus-ah-staging.herokuapp.com/api/v1/articles/tags');
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

export const getArticlesByCategory = tags => async (dispatch) => {
  try {
    tags.map(async (tag) => {
      const url = `http://mazus-ah-staging.herokuapp.com/api/v1/articles?tag=${tag}`;
      const res = await axios.get(url);
      dispatch(setArticles(res));
    });
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    Toastr.error(message);
  }
};

export const getTrendingArticles = () => async (dispatch) => {
  try {
    const response = await axios.get('http://mazus-ah-staging.herokuapp.com/api/v1/articles/trends');
    const { trends } = response.data;
    dispatch(setTrendingArticles(trends));
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    Toastr.error(message);
  }
};
