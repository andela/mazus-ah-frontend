import * as actions from '../../actions/passwordResetActions';
import passwordResetReducer, { initialState } from '../passwordResetReducer';


describe('Reset Reducer', () => {
  it('should return initial state', () => {
    const newState = passwordResetReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
  it('should change loading state', () => {
    const expectedStateChange = { loading: true, success: false, message: '' };
    const action = actions.requestLoading();
    const newState = passwordResetReducer(initialState, action);
    expect(newState).toEqual(expectedStateChange);
  });
  it('should change success state to true', () => {
    const expectedStateChange = { loading: false, success: true, message: 'Password reset link was sent' };
    const action = actions.success('Password reset link was sent');
    const newState = passwordResetReducer(initialState, action);
    expect(newState).toEqual(expectedStateChange);
  });
  it('should change loading state', () => {
    const expectedStateChange = { loading: false, success: false, message: 'Something went wrong' };
    const action = actions.failed('Something went wrong');
    const newState = passwordResetReducer(initialState, action);
    expect(newState).toEqual(expectedStateChange);
  });
});
