import {
  GET_ARTICLES,
  GET_ARTICLE_ERROR,
  ARTICLE_LOADING,
  GET_SINGLE_ARTICLE,
  CLEAR_ARTICLE_ERROR,
} from '@Actions/types/articleType';

export const initialState = {
  articles: [],
  article: {},
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
    default:
      return state;
  }
};
