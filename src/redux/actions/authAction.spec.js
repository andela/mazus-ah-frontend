import '@babel/polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { instance } from '@Utils/API';
import {
  AUTH_FAILED,
  AUTH_LOADING,
  AUTH_SUCCESS,
} from './types/authType';
import { registerAccount, signInAccount } from './authActions';

const mockStore = configureMockStore([thunk]);
const userData = {
  email: 'johndoest@test.com',
  password: 'P4ssw0rd',
  firstName: 'John',
  lastName: 'Done',
  confirmPassword: 'P4ssw0rd',
};
const authResponse = {
  id: 'b25551cc-d377-4982-b787-367a3b00ebe1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoes@test.com',
  isVerified: false,
  type: 'user',
  iat: 1567183874,
  exp: 1569257474,
};
const props = {
  history: { push: jest.fn },
};

jest.mock('axios');
// jwt decode mock
jest.mock('jwt-decode');
jwtDecode.mockImplementation(() => ({
  exp: (new Date().getTime() + 50000) / 1000,
  ...authResponse,
}));

// localstorage mocks
localStorage.getItem = jest.fn().mockImplementation(() => authResponse.token);


describe('Signup User actions', () => {
  const store = mockStore({
    authReducer: {
      user: {},
      isAuthenticated: false,
      loading: false,
      error: {},
    },
  });

  beforeEach(() => {
    moxios.install(instance);
    store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall(instance);
    localStorage.clear();
  });

  it('should dispatch AUTH_LOADING and AUTH_SUCCESS for registeration', async () => {
    const successfulRequest = {
      data: {
        user: {
          token: 'jkdbfjdsbfkbdskjfglkdsflksdbfjbsdfbsdjb',
        },
      },
    };

    const expectedActions = [
      {
        type: AUTH_LOADING,
        payload: {
          loading: true,
        },
      },
      {
        type: AUTH_SUCCESS,
        payload: {
          loading: false,
          user: 'jkdbfjdsbfkbdskjfglkdsflksdbfjbsdfbsdjb',
        },
      },
    ];

    axios.post.mockResolvedValue(successfulRequest);
    await store.dispatch(registerAccount(userData, props.history));
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });

  it('should dispatch AUTH_LOADING and AUTH_FAILED for registeration', async () => {
    const failedRequest = {
      response: {
        data: {
          errors: {
            message: 'Something went wrong, we are working on a fix',
          },
        },
      },
    };

    const expectedActions = [
      {
        type: AUTH_LOADING,
        payload: {
          loading: true,
        },
      },
      {
        type: AUTH_FAILED,
        payload: {
          loading: false,
          error: 'Something went wrong, we are working on a fix',
        },
      },
    ];

    axios.post.mockRejectedValue(failedRequest);
    await store.dispatch(registerAccount(userData, props.history));
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });
});

describe('Signin User actions', () => {
  const store = mockStore({
    authReducer: {
      user: {},
      isAuthenticated: false,
      loading: false,
      error: {},
    },
  });

  beforeEach(() => {
    moxios.install(instance);
    store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall(instance);
    localStorage.clear();
  });

  it('should dispatch AUTH_LOADING and AUTH_SUCCESS for login', async () => {
    const successfulRequest = {
      data: {
        user: {
          token: 'jkdbfjdsbfkbdskjfglkdsflksdbfjbsdfbsdjb',
        },
      },
    };

    const expectedActions = [
      {
        type: AUTH_LOADING,
        payload: {
          loading: true,
        },
      },
      {
        type: AUTH_SUCCESS,
        payload: {
          loading: false,
          user: authResponse,
        },
      },
    ];

    axios.post.mockResolvedValue(successfulRequest);
    await store.dispatch(signInAccount(userData, props.history));
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });

  it('should dispatch AUTH_LOADING and AUTH_FAILED for login', async () => {
    const failedRequest = {
      response: {
        data: {
          errors: {
            message: 'Something went wrong, we are working on a fix',
          },
        },
      },
    };

    const expectedActions = [
      {
        type: AUTH_LOADING,
        payload: {
          loading: true,
        },
      },
      {
        type: AUTH_FAILED,
        payload: {
          loading: false,
          error: 'Something went wrong, we are working on a fix',
        },
      },
    ];

    axios.post.mockRejectedValue(failedRequest);
    await store.dispatch(signInAccount(userData, props.history));
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });
});
