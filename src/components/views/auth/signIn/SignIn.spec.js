import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '@Redux/store/index';
import InputField from '@Common/form/InputField';
import Signin, { SigninComponent } from './Signin';

const props = {
  loading: false,
  history: {
    push: jest.fn(),
  },
  value: 'Some value',
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

  it('email Input check', () => {
    const onChange = jest.fn();
    const handleSubmit = jest.fn();
    const event = {
      persist: jest.fn(),
      target: { value: 'dave@gmail.com', name: 'email' },
    };
    const wrapper = shallow(<SigninComponent onSubmit={handleSubmit} onChange={onChange} {...props} />);
    wrapper.find('Input[type="email"]').simulate('change', event);
    expect(wrapper.find('input[name="email"]')).toMatchSnapshot();
  });

  it('Password Input check', () => {
    const onChange = jest.fn();
    const handleSubmit = jest.fn();
    const event = {
      persist: jest.fn(),
      target: { value: 'P455word', name: 'password' },
    };
    const wrapper = shallow(<SigninComponent onSubmit={handleSubmit} onChange={onChange} {...props} />);
    wrapper.find('Input[type="password"]').simulate('change', event);
    expect(wrapper.find('input[name="password"]')).toMatchSnapshot();
  });
  it('should call onChange prop with input value', () => {
    const onChange = jest.fn();
    const component = mount(<InputField value="custom email" type="email" name="email" onChange={onChange} />);
    expect(component).toMatchSnapshot();
  });
  it('should call onSubmit prop function when form is submitted', () => {
    const handleSubmit = jest.fn();
    const wrapper = mount(<SigninComponent onSubmit={handleSubmit} {...props} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
