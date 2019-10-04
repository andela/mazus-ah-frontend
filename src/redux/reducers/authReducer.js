import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  SOCIAL_LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/types/authType';

export const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        loading: payload.loading,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: payload.loading,
        user: payload.user,
        isAuthenticated: true,
      };
    case SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        loading: payload.loading,
        user: payload,
        isAuthenticated: true,
      };
    case AUTH_FAILED:
      return {
        ...state,
        loading: payload.loading,
        error: payload.error,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
