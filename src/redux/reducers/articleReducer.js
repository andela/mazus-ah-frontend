import GET_ARTICLES from '../actions/types/articleType';

const initialState = {
  articles: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: payload,
      };
    default:
      return state;
  }
};
