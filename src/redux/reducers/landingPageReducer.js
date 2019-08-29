import { GET_ARTICLES, GET_TAGS } from '../actions/types/landingPage';

const initialState = {
  articles: [],
  tags: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: payload,
      };

    case GET_TAGS:
      return {
        ...state,
        articles: payload,
      };
    default:
      return state;
  }
};
