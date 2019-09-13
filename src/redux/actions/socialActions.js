import jwtDecode from 'jwt-decode';
import { SOCIAL_LOGIN_FAILURE, SOCIAL_LOGIN_SUCCESS } from './types/socialType';

export const socialLoginSuccess = decoded => ({
  type: SOCIAL_LOGIN_SUCCESS,
  payload: decoded,
});

export const socialLoginFailure = error => ({
  type: SOCIAL_LOGIN_FAILURE,
  payload: error,
});
export const authorizeSocialUser = token => async (dispatch) => {
  try {
    localStorage.setItem('token', token);
    const decoded = jwtDecode(token);
    dispatch(socialLoginSuccess(decoded));
  } catch (err) {
    dispatch(socialLoginFailure(err));
  }
};

export const getToken = (tokenString) => {
  const startIndex = tokenString.indexOf('=') + 1;
  const token = tokenString.slice(startIndex);
  return token;
};

export const socialLink = (type) => {
  window.location.href = `https://mazus-ah-staging.herokuapp.com/api/v1/auth/${type}`;
  return true;
};
