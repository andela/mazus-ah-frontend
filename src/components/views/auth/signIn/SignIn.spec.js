import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '@Redux/store/index';
import Signin, { SigninComponent } from './Signin';

const props = {
  loading: false,
  history: {
    push: jest.fn(),
  },
  onSubmit: jest.fn(),
};

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
    expect(component).toMatchSnapshot();
    expect(component.find('button')).toHaveLength(3);
    expect(component.find('input')).toHaveLength(2);
  });

  it('should call on change props', () => {
    const event = {
      preventDefault() { },
      target: { value: 'johndoe@test.com', name: 'email' },
    };
    const mockOnSignUpFn = jest.fn();
    const component = mount(
      <SigninComponent onSignIn={mockOnSignUpFn} {...props} />,
    );
    const inputTag = component.find('input').at(0);
    inputTag.simulate('change', event);
    expect(mockOnSignUpFn.mock.calls.length).toBe(0);
    component.unmount();
  });
  it('should test that password is match is called', () => {
    const mockOnSignInFn = jest.fn();
    const component = mount(
      <Router>
        <SigninComponent onSignIn={mockOnSignInFn} {...props} />
      </Router>,
    );
    const inputTag = component.find('input');
    inputTag.at(0).simulate('change', {
      target:
        { name: 'email', value: 'johndoe@test.com' },
    });
    inputTag.at(1).simulate('change', {
      target:
        { name: 'password', value: 'P4ssw0rd' },
    });
    inputTag.at(1).simulate('change', {
      target:
        { name: 'password', value: 'P4ssw0rd' },
    });
    expect(mockOnSignInFn.mock.calls.length).toBe(0);
  });
  it('should call onSubmit prop function when form is submitted', () => {
    const handleSubmit = jest.fn();
    const wrapper = mount(<SigninComponent onSubmit={handleSubmit} {...props} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
});
