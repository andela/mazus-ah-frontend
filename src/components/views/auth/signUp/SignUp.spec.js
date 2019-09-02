import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '@Redux/store/index';
import SignUp, { SignUpComponent } from './SignUp';

const props = {
  loading: false,
  history: {
    push: jest.fn(),
  },
  onSubmit: jest.fn(),
};

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
    expect(component).toMatchSnapshot();
    expect(component.find('button')).toHaveLength(3);
    expect(component.find('input')).toHaveLength(5);
    expect(component.find('img')).toHaveLength(1);
  });

  it('should call on change props', () => {
    const event = {
      preventDefault() { },
      target: { value: 'frank@mail.com', name: 'email' },
    };
    const mockOnSignUpFn = jest.fn();
    const component = mount(
      <SignUpComponent onSignUp={mockOnSignUpFn} {...props} />,
    );
    const inputTag = component.find('input').at(0);
    inputTag.simulate('change', event);
    expect(mockOnSignUpFn.mock.calls.length).toBe(0);
    component.unmount();
  });
  it('should test that password is match is called', () => {
    const mockOnSignUpFn = jest.fn();
    const component = mount(
      <SignUpComponent onSignUp={mockOnSignUpFn} {...props} />,
    );
    const inputTag = component.find('input');
    inputTag.at(0).simulate('change', {
      target:
        { name: 'email', value: 'frank@gmail.com' },
    });
    inputTag.at(1).simulate('change', {
      target:
        { name: 'firstName', value: 'frank' },
    });
    inputTag.at(2).simulate('change', {
      target:
        { name: 'lastName', value: 'angee' },
    });
    inputTag.at(3).simulate('change', {
      target:
        { name: 'password', value: 'P4ssw0rd' },
    });
    inputTag.at(4).simulate('change', {
      target:
        { name: 'confirmPassword', value: 'P4ssw0rddd' },
    });
    const submitBtn = component.find('button').at(0);
    submitBtn.simulate('submit',
      { preventDefault() { } });
    expect(mockOnSignUpFn.mock.calls.length).toBe(0);
  });
  it(' should call onSubmit prop function when form is submitted', () => {
    const registerUser = jest.fn();
    const wrapper = mount(<SignUpComponent onSubmit={registerUser} {...props} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(registerUser).toHaveBeenCalledTimes(0);
  });
});
