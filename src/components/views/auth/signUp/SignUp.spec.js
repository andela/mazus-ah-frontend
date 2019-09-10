import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp, { SignUpComponent } from './SignUp';

const initialState = {
  auth: {
    user: {},
    isAuthenticated: false,
    loading: false,
    error: {},
  },
};
const props = {
  loading: false,
  history: {
    push: jest.fn(),
  },
  location: {
    search: 'localhost:8080/signup?token=abc',
  },
  socialSignOn: jest.fn(),
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);
describe('SignUp Component', () => {
  it('Should render without errors', () => {
    const component = shallow(
      <Router>
        <SignUp store={store} {...props} />
      </Router>,
    );
    expect(component).toMatchSnapshot();
  });
  it('Should render along with children component', () => {
    const component = mount(
      <Router>
        <SignUp store={store} {...props} />
      </Router>,
    );
    expect(component.find('button')).toHaveLength(3);
    expect(component.find('input')).toHaveLength(5);
    expect(component.find('img')).toHaveLength(1);
  });
  it('should call onChange props for email input', () => {
    const wrapper = mount(
      <Router>
        <SignUp store={store} {...props} />
      </Router>,
    );
    const emailInput = wrapper.find('input[type="email"]');
    emailInput.simulate('change', {
      persist: () => { },
      target: {
        name: 'email',
        value: 'jandoe@test.com',
      },
    });
    expect(wrapper.find('input[type="email"]').length).toEqual(1);
    expect(emailInput.html()).toMatch('jandoe@test.com');
    wrapper.unmount();
  });

  it('should call onChange props for password input', () => {
    const wrapper = mount(
      <Router>
        <SignUp store={store} {...props} />
      </Router>,
    );
    const passwordInput = wrapper.find('input[type="password"]').at(0);
    passwordInput.simulate('change', {
      persist: () => { },
      target: {
        name: 'password',
        value: 'P4ssw0rd',
      },
    });
    expect(wrapper.find('input[type="password"]').length).toEqual(2);
    expect(passwordInput.html()).toMatch('P4ssw0rd');
    wrapper.unmount();
  });

  it(' should call onSubmit prop function when form is submitted', () => {
    const registerUser = jest.fn();
    const wrapper = mount(<Router><SignUpComponent onSubmit={registerUser} {...props} /></Router>);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(registerUser).toHaveBeenCalledTimes(1);
  });
  it('should call history prop function to redirect users to dashboard on successful authentication', () => {
    const component = mount(
      <Router>
        <SignUp store={store} location={props.location} history={props.history} />
      </Router>,
    );
    expect(props.history.push).toHaveBeenCalledTimes(0);
  });
});
