import Toastr from 'toastr';
import API_SERVICE, { API_URL } from '@Utils/API';

import {
  PASSWORD_REQUEST_LOADING, PASSWORD_REQUEST_SUCCESS, PASSWORD_REQUEST_FAILED,
} from './types/resetPasswordType';

export const requestLoading = () => ({
  type: PASSWORD_REQUEST_LOADING,
  payload: {
    loading: true,
    message: '',
  },
});

export const success = message => ({
  type: PASSWORD_REQUEST_SUCCESS,
  payload: {
    loading: false,
    success: true,
    message,
  },
});

export const failed = message => ({
  type: PASSWORD_REQUEST_FAILED,
  payload: {
    loading: false,
    message,
  },
});

export const requestPasswordResetLink = email => async (dispatch) => {
  try {
    dispatch(requestLoading());
    const result = await API_SERVICE.post(`${API_URL}/auth/forgotpassword`, { email });
    dispatch(success(result.data.auth.message));
  } catch (err) {
    Toastr.error(err.response.data.errors.message);
    dispatch(failed(''));
  }
};

export const applyReset = (password, confirmPassword, token) => async (dispatch) => {
  try {
    dispatch(requestLoading());
    const result = await API_SERVICE.patch(`${API_URL}/auth/resetpassword/${token}`, { password, confirmPassword });
    dispatch(success(result.data.auth.message));
  } catch (err) {
    Toastr.error(err.response.data.errors.message);
    dispatch(failed(''));
  }
};
