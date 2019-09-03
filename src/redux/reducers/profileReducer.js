import {
  GET_PROFILE,
  PROFILE_LOADING, PROFILE_ERROR,
  GET_PROFILE_ARTICLES,
  PROFILE_ARTICLES_LOADING,
} from '../actions/types/profileType';

export const initialState = {
  profile: {},
  errors: {},
  articles: [],
  loading: false,
  articlesLoading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    case PROFILE_ARTICLES_LOADING:
      return {
        ...state,
        articlesLoading: payload,
      };
    case GET_PROFILE_ARTICLES:
      return {
        ...state,
        articles: [...payload],
      };
    default:
      return state;
  }
};
