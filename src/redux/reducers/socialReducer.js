import { SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGIN_FAILURE } from '@Redux/actions/types/socialType';

export const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
  errors: {},
};


const socialReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCIAL_LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        errors: action.payload,
      };
    case SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default socialReducer;
