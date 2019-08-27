import {
  authLoading,
  authFailed,
  authSuccess,
} from '@Redux/actions/authActions';
import authReducer, { initialState } from '../authReducer';

let action;
let newState;
const user = {
  email: 'johndoes@test.com',
  password: 'P4ssw0rd',
  firstName: 'John',
  lastName: 'Done',
  confirmPassword: 'P4ssw0rd',
};
const error = 'some error';
describe('Auth Reducer', () => {
  it('should return initial state for unknown action types', () => {
    action = { type: null };
    newState = authReducer(initialState, action);
    expect(newState).toEqual(initialState);
    expect(newState.error).toEqual({});
    expect(newState.isAuthenticated).toEqual(false);
    expect(newState.user).toEqual({});
    expect(newState.loading).toEqual(false);
  });
  it('should handle action with type AUTH_LOAING', () => {
    const { type, payload } = authLoading();
    newState = authReducer(initialState, { type, payload });
    expect(type).toEqual('AUTH_LOADING');
    expect(payload.loading).toEqual(true);
  });
  it('should handle action with type AUTH_SUCCESS', () => {
    const { type, payload } = authSuccess(user);
    newState = authReducer(initialState, { type, payload });
    expect(type).toEqual('AUTH_SUCCESS');
    expect(payload.user).toEqual(user);
    expect(payload.loading).toEqual(false);
  });
  it('should handle action with type AUTH_FAILED', () => {
    const { type, payload } = authFailed(error);
    newState = authReducer(initialState, { type, payload });
    expect(type).toEqual('AUTH_FAILED');
    expect(payload.loading).toEqual(false);
    expect(payload.error).toEqual(error);
  });
});
