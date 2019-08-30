import { SET_ARTICLES, SET_TAGS, LOADING } from '../actions/types/landingPage';

const initialState = {
  articles: [],
  tags: [],
  loading: false,
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
    case LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};
