import {
  PASSWORD_REQUEST_LOADING,
  PASSWORD_REQUEST_SUCCESS,
  PASSWORD_REQUEST_FAILED,
} from '../actions/types/resetPasswordType';

export const initialState = {
  loading: false,
  success: false,
  message: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PASSWORD_REQUEST_LOADING:
      return {
        ...state,
        loading: payload.loading,
        message: payload.message,
      };
    case PASSWORD_REQUEST_SUCCESS:
      return {
        ...state,
        loading: payload.loading,
        success: payload.success,
        message: payload.message,
      };
    case PASSWORD_REQUEST_FAILED:
      return {
        ...state,
        loading: payload.loading,
        message: payload.message,
      };
    default:
      return state;
  }
};
