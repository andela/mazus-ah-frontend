import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Signin, { SigninComponent } from './Signin';

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
  value: 'Some value',
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);
describe('SignIn Component', () => {
  it('should render without errors', () => {
    const component = shallow(
      <Router>
        <Signin store={store} {...props} />
      </Router>,
    );
    expect(component).toMatchSnapshot();
  });
  it('should render along with children component', () => {
    const component = mount(
      <Router>
        <Signin store={store} {...props} />
      </Router>,
    );
    expect(component.find('button')).toHaveLength(3);
    expect(component.find('input')).toHaveLength(2);
  });
  it('should call onChange props for email input', () => {
    const wrapper = mount(
      <Router>
        <Signin store={store} {...props} />
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
        <Signin store={store} {...props} />
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
    expect(wrapper.find('input[type="password"]').length).toEqual(1);
    expect(passwordInput.html()).toMatch('P4ssw0rd');
    wrapper.unmount();
  });
  it('should call onSubmit prop function when form is submitted', () => {
    const handleSubmit = jest.fn();
    const wrapper = mount(<Router><SigninComponent onSubmit={handleSubmit} {...props} /></Router>);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
  it('should not call history if token string is empty', () => {
    const handleSubmit = jest.fn();
    const history = {
      push: jest.fn()
    }
   const location = {
    search: 'localhost:8080/signup?token',
  };
    const wrapper = mount(<Router><SigninComponent store={store} onSubmit={handleSubmit} location={location} history={history} {...props} /></Router>);
    expect(history.push).toHaveBeenCalledTimes(0);
  });
});
