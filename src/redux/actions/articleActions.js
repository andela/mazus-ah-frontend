
import API_SERVICE from '@Utils/API';
import {
  GET_ARTICLES,
  GET_ARTICLE_ERROR,
  GET_SINGLE_ARTICLE,
  ARTICLE_LOADING,
  CLEAR_ARTICLE_ERROR,
} from './types/articleType';

const articles = [];

export const articleLoading = () => ({
  type: ARTICLE_LOADING,
  payload: {
    loading: true,
  },
});

export const getSingleArticle = article => ({
  type: GET_SINGLE_ARTICLE,
  payload: {
    loading: false,
    article,
  },
});

export const articleError = error => ({
  type: GET_ARTICLE_ERROR,
  payload: {
    loading: false,
    error,
  },
});

export const clearArticleError = () => ({
  type: CLEAR_ARTICLE_ERROR,
  payload: {
    error: {},
  },
});

export const getArticleBySlug = slug => async (dispatch) => {
  dispatch(clearArticleError());
  dispatch(articleLoading());
  try {
    const fetchArticle = await API_SERVICE.get(`/articles/${slug}`);
    dispatch(getSingleArticle(fetchArticle.data.article));
  } catch (error) {
    dispatch(articleError(error.response.data.errors));
  }
};

export const getArticles = () => ({
  type: GET_ARTICLES,
  payload: { articles, loading: false },
});
