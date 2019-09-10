import jwtDecode from 'jwt-decode';
import { message as alert } from 'antd';
import '@Common/antAlert.scss';
import API_SERVICE from '@Utils/API';

import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAILED,
  LOGOUT,
  SOCIAL_LOGIN_SUCCESS,
} from './types/authType';


export const authLoading = () => ({
  type: AUTH_LOADING,
  payload: {
    loading: true,
  },
});

export const authSuccess = user => ({
  type: AUTH_SUCCESS,
  payload: {
    loading: false,
    user,
  },
});


export const authFailed = error => ({
  type: AUTH_FAILED,
  payload: {
    loading: false,
    error,
  },
});

export const signInAccount = (userData, history) => async (dispatch) => {
  dispatch(authLoading());
  try {
    const logInUser = await API_SERVICE.post('/auth/signin', userData);
    const { token } = logInUser.data.user;
    localStorage.setItem('jwtToken', token);
    const user = jwtDecode(token);
    alert.success('User successfully logged in');
    dispatch(authSuccess(user));
    return history.push('/');
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    alert.error(message);
    return dispatch(authFailed(message));
  }
};

export const registerAccount = (userData, history) => async (dispatch) => {
  dispatch(authLoading());

  try {
    const newUser = await API_SERVICE.post('/auth/signup', userData);
    const { token } = newUser.data.user;
    alert.success('Account Created! Check your inbox to verify your email');
    dispatch(authSuccess(token));
    return history.push('/signin');
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    alert.error(message);
    return dispatch(authFailed(message));
  }
};

export const logout = () => ({
  type: LOGOUT,
});

export const logoutAccount = history => async (dispatch) => {
  try {
    await API_SERVICE.post('/auth/logout');
    dispatch(logout());
    localStorage.removeItem('jwtToken');
    alert.success('You have successfully signed out!');
    return history.push('/');
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    return dispatch(authFailed(message));
  }
};


export const socialLoginSuccess = decoded => ({
  type: SOCIAL_LOGIN_SUCCESS,
  payload: decoded,
});
export const authorizeSocialUser = token => async (dispatch) => {
  try {
    localStorage.setItem('jwtToken', token);
    const decoded = jwtDecode(token);
    dispatch(socialLoginSuccess(decoded));
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    alert.error(message);
    dispatch(authFailed(message));
  }
};

export const getToken = (tokenString) => {
  const startIndex = tokenString.indexOf('=') + 1;
  const token = tokenString.slice(startIndex);
  return token;
};

export const socialLink = (type) => {
  window.location.href = `https://mazus-ah-staging.herokuapp.com/api/v1/auth/${type}`;
};
