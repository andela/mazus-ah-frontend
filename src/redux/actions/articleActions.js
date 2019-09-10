
import API_SERVICE from '@Utils/API';
import isEmpty from '@Utils/isEmpty';
import {
  GET_ARTICLES,
  GET_ARTICLE_ERROR,
  GET_SINGLE_ARTICLE,
  ARTICLE_LOADING,
  CLEAR_ARTICLE_ERROR,
  CREATE_COMMENT,
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

export const createArticleComment = comment => ({
  type: CREATE_COMMENT,
  payload: {
    loading: false,
    comment,
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
    const fetchedArticle = await API_SERVICE.get(`/articles/${slug}`);
    const { tagsList } = fetchedArticle.data.article;
    if (!isEmpty(tagsList)) {
      const randomTag = tagsList[Math.floor(Math.random() * tagsList.length)];
      const relatedArticles = await API_SERVICE.get(`/search?keyword=${randomTag}`);
      fetchedArticle.data.article.relatedArticles = relatedArticles.data.matches.tags;
    }
    dispatch(getSingleArticle(fetchedArticle.data.article));
  } catch (error) {
    dispatch(articleError(error.response.data.errors));
  }
};

export const createArticleOnComment = (slug, comment) => async (dispatch) => {
  try {
    const postComment = await API_SERVICE.post(`/articles/${slug}/comments`, comment);
    dispatch(createArticleComment(postComment.data.comment));
  } catch (error) {
    dispatch(articleError(error.response.data.errors));
  }
};

export const getArticles = () => ({
  type: GET_ARTICLES,
  payload: { articles, loading: false },
});

export const rateArticle = (rate, slug) => async () => {
  try {
    await API_SERVICE.post(`/articles/${slug}/ratings`, rate);
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    alert.error(message);
  }
};
