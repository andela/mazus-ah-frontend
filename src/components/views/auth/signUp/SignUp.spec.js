import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '@Redux/store/index';
import InputField from '@Common/form/InputField';
import SignUp, { SignUpComponent } from './SignUp';

const props = {
  loading: false,
  history: {
    push: jest.fn(),
  },
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

  it('should call onChange prop with input value', () => {
    const onChange = jest.fn();
    const component = mount(<InputField value="custom email" type="email" name="email" onChange={onChange} />);
    expect(component).toMatchSnapshot();
  });

  it('email Input check', () => {
    const onChange = jest.fn();
    const registerUser = jest.fn();
    const event = {
      persist: jest.fn(),
      target: { value: 'james@email.com', name: 'email' },
    };
    const wrapper = shallow(<SignUpComponent onSubmit={registerUser} onChange={onChange} {...props} />);
    wrapper.find('Input[type="email"]').at(0).simulate('change', event);
    expect(wrapper.find('input[name="email"]')).toMatchSnapshot();
  });
  it('Password Input check', () => {
    const onChange = jest.fn();
    const registerUser = jest.fn();
    const event = {
      persist: jest.fn(),
      target: { value: 'P455word', name: 'password' },
    };
    const wrapper = shallow(<SignUpComponent onSubmit={registerUser} onChange={onChange} {...props} />);
    wrapper.find('Input[type="password"]').at(0).simulate('change', event);
    expect(wrapper.find('input[name="password"]')).toMatchSnapshot();
  });

  it(' should call onSubmit prop function when form is submitted', () => {
    const registerUser = jest.fn();
    const wrapper = mount(<SignUpComponent onSubmit={registerUser} {...props} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(registerUser).toHaveBeenCalledTimes(1);
  });
});
