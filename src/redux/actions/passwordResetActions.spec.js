import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import * as actions from './passwordResetActions';

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);
jest.mock('axios');
const successfulRequest = {
  data: {
    auth: {
      email: 'sample.andela.com',
      token: 'jkdbfjdsbfkbdskjfglkdsflksdbfjbsdfbsdjb',
      message: 'Password Reset Link has been sent to your mail',
    },
  },
};

const failedRequest = {
  response: {
    data: {
      errors: {
        message: 'Something went wrong, we are working on a fix',
      },
    },
  },
};

const successfullReset = {
  data: {
    auth: {
      message: 'Your Password has been reset successfully',
    },
  },
};

describe('Test Password Reset', () => {
  it('should send password reset link successfully', async () => {
    const expectedActions = [
      { type: 'PASSWORD_REQUEST_LOADING', payload: { loading: true, message: '' } },
      { type: 'PASSWORD_REQUEST_SUCCESS', payload: { loading: false, success: true, message: 'Password Reset Link has been sent to your mail' } },
    ];
    axios.post.mockResolvedValue(successfulRequest);
    const store = mockStore({});
    const email = 'sammiestt@gmail.com';
    await store.dispatch(actions.requestPasswordResetLink(email));
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });

  it('should not send password reset link if email is not provided', async () => {
    const expectedActions = [
      { type: 'PASSWORD_REQUEST_LOADING', payload: { loading: true, message: '' } },
      {
        type: 'PASSWORD_REQUEST_FAILED',
        payload: { loading: false, message: '' },
      },
    ];
    axios.post.mockRejectedValue(failedRequest);
    const store = mockStore({});
    await store.dispatch(actions.requestPasswordResetLink()); // no email
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });

  it('should post new password successfully', async () => {
    const expectedActions = [
      { type: 'PASSWORD_REQUEST_LOADING', payload: { loading: true, message: '' } },
      { type: 'PASSWORD_REQUEST_SUCCESS', payload: { loading: false, success: true, message: 'Your Password has been reset successfully' } },
    ];
    axios.patch.mockResolvedValue(successfullReset);
    const store = mockStore({});

    const password = 'MM33ssiiUU';
    const confirmPassword = 'MM33ssiiUU';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9dtYWlsL';

    await store.dispatch(actions.applyReset(password, confirmPassword, token));
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });

  it('should not reset password if incomplete data is sent', async () => {
    const expectedActions = [
      { type: 'PASSWORD_REQUEST_LOADING', payload: { loading: true, message: '' } },
      {
        type: 'PASSWORD_REQUEST_FAILED',
        payload: { loading: false, message: '' },
      },
    ];
    axios.patch.mockRejectedValue(failedRequest);
    const store = mockStore({});
    await store.dispatch(actions.applyReset()); // no data passed
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });
});
