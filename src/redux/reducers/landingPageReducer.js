import {
  SET_ARTICLES, SET_TAGS, SET_TRENDING_ARTICLES, LOADING,
} from '../actions/types/landingPage';

const initialState = {
  articles: [],
  tags: [],
  trends: [],
  isLoading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: [...state.articles, payload],
      };

    case SET_TAGS:
      return {
        ...state,
        tags: payload,
      };
    case SET_TRENDING_ARTICLES:
      return {
        ...state,
        trends: payload,
      };
    case LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
