import {
  GET_ARTICLES,
  GET_ARTICLE_ERROR,
  ARTICLE_LOADING,
  GET_SINGLE_ARTICLE,
  CLEAR_ARTICLE_ERROR,
  CREATE_COMMENT,
  GET_ARTICLE_STAT,
  SET_ARTICLE_RATE,
} from '../actions/types/articleType';

export const initialState = {
  articles: [],
  article: {},
  articleStat: {},
  loading: false,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ARTICLES:
      return {
        ...state,
        loading: payload.loading,
        articles: payload.articles,
      };
    case ARTICLE_LOADING:
      return {
        ...state,
        loading: payload.loading,
      };
    case GET_SINGLE_ARTICLE:
      return {
        ...state,
        loading: payload.loading,
        article: payload.article,
      };
    case CREATE_COMMENT:
      return {
        ...state,
        loading: payload.loading,
        article: {
          ...state.article,
          articlecomment: [...state.article.articlecomment, payload.comment],
        },
      };
    case GET_ARTICLE_ERROR:
      return {
        ...state,
        loading: payload.loading,
        error: payload.error,
      };
    case CLEAR_ARTICLE_ERROR:
      return {
        ...state,
        error: payload.error,
      };
    case GET_ARTICLE_STAT:
      return {
        ...state,
        articleStat: payload,
      };
    case SET_ARTICLE_RATE:
      return {
        ...state,
        article: { ...state.article, ratings: payload },
      };
    default:
      return state;
  }
};
