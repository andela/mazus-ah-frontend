import {
  PUBLISHING_ARTICLE,
  PUBLISH_SUCCESS,
  PUBLISH_FAILURE,
} from '@Types/newArticleType';

export const initialState = {
  newArticle: {},
  loading: false,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PUBLISHING_ARTICLE:
      return {
        ...state,
        loading: payload.loading,
      };
    case PUBLISH_SUCCESS:
      return {
        ...state,
        loading: payload.loading,
        newArticle: payload.newArticle,
      };
    case PUBLISH_FAILURE:
      return {
        ...state,
        loading: payload.loading,
        error: payload.error,
      };
    default:
      return state;
  }
};
