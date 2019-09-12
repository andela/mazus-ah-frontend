/* eslint-disable import/no-duplicates */
import { socialLoginSuccess, socialLoginFailure } from '@Redux/actions/socialActions';
import { initialState } from '@Redux/reducers/socialReducer';
import socialReducer from '@Redux/reducers/socialReducer';


let action;
let newState;
const user = { email: 'mylove@gmail.com', password: 'mylove123' };
describe.only('Social Reducer', () => {
  it('should return initial state for unkwown action types', () => {
    action = { type: null };
    newState = socialReducer(initialState, action);
    expect(newState).toEqual(initialState);
    expect(newState.isAuthenticated).toEqual(false);
    expect(newState.user).toEqual({});
  });
  it('should handle action with type SOCIAL_LOGIN_SUCCESS', () => {
    const { type, payload } = socialLoginSuccess(user);
    newState = socialReducer(initialState, { type, payload });
    expect(type).toEqual('SOCIAL_LOGIN_SUCCESS');
  });
  it('should handle action with type SOCIAL_LOGIN_FAILURE', () => {
    const { type, payload } = socialLoginFailure(user);
    newState = socialReducer(initialState, { type, payload });
    expect(type).toEqual('SOCIAL_LOGIN_FAILURE');
  });
});
