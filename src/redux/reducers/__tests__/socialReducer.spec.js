import { socialLoginSuccess } from '@Redux/actions/authActions';
import authReducer, { initialState } from '@Redux/reducers/authReducer';


let action;
let newState;
const user = { email: 'mylove@gmail.com', password: 'mylove123' };
describe.only('Social Reducer', () => {
  it('should return initial state for unkwown action types', () => {
    action = { type: null };
    newState = authReducer(initialState, action);
    expect(newState).toEqual(initialState);
    expect(newState.isAuthenticated).toEqual(false);
    expect(newState.user).toEqual({});
  });
  it('should handle action with type SOCIAL_LOGIN_SUCCESS', () => {
    const { type, payload } = socialLoginSuccess(user);
    newState = authReducer(initialState, { type, payload });
    expect(type).toEqual('SOCIAL_LOGIN_SUCCESS');
  });
});
