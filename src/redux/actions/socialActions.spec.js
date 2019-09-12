import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from '@Redux/reducers/socialReducer';
import * as actions from '@Redux/actions/socialActions';
import { SOCIAL_LOGIN_SUCCESS } from '@Redux/actions/types/socialType';


const mockStore = configureMockStore([thunk]);

const store = mockStore({
  socialReducer: initialState,
});

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

const dispatch = jest.fn(() => ({
  type: SOCIAL_LOGIN_SUCCESS,
  payload: {
    user: authResponse,
  },
}));

describe('Social Action tests', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should successfully dispatch an object when token is decoded', () => {
    const { authorizeSocialUser } = actions;
    expect(typeof authorizeSocialUser(authResponse)(dispatch)).toEqual('object');
  });

  it('should return a decoded object and an action type of SOCIAL_LOGIN_SUCCESS to the action on success', () => {
    const decoded = authResponse;
    const action = actions.socialLoginSuccess(decoded);
    expect(action).toEqual({ type: 'SOCIAL_LOGIN_SUCCESS', payload: decoded });
  });
  it('should return an error object and action type of SOCIAL_LOGIN_FAILURE to the action payload on failure', () => {
    const { authorizeSocialUser } = actions;
    const error = authorizeSocialUser();
    const action = actions.socialLoginFailure(error);
    expect(action).toEqual({ type: 'SOCIAL_LOGIN_FAILURE', payload: error });
  });

  it('should return striped token from URL', () => {
    const tokenString = 'localhost:8080/signup?token=abc';
    const token = actions.getToken(tokenString);
    expect(token).toEqual('abc');
  });
});
