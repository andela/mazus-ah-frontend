import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SubmitEmailComponent } from './SubmitEmail';
import { ResetPasswordComponent } from './NewPassword';

describe('<SubmitEmail /> Component', () => {
  const props = {
    loading: false,
    success: false,
    message: '',
    requestResetLink: jest.fn(),
  };

  it('should submit email successfully', () => {
    const wrapper = mount(
      <Router>
        <SubmitEmailComponent {...props} />
      </Router>,
    );

    const form = wrapper.find('form');
    form.simulate('submit');
    expect(form.length).toBe(1);
    expect(props.requestResetLink).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  it('should render the SubmitEmail component withoutcrashing', () => {
    const wrapper = mount(
      <Router>
        <SubmitEmailComponent {...props} />
      </Router>,
    );
    const emailInput = wrapper.find('#email-input').at(0);
    expect(emailInput.length).toEqual(1);
 
    emailInput.simulate('change', {
      persist: () => {},
      target: {
        name: 'email',
        value: 'sam@sam.com',
      },
    });

    
    expect(emailInput.html()).toMatch('sam@sam.com');
    wrapper.unmount();
  });

  it('should display loading on submit', () => {
    const wrapper = mount(
      <Router>
        <SubmitEmailComponent loading message="" success={false} requestResetLink={jest.fn()} />
      </Router>,
    );
    expect(wrapper.find('.loading').length).toEqual(1);
    wrapper.unmount();
  });
});

describe('<NewPassword /> Component', () => {
  const props = {
    loading: false,
    success: false,
    message: '',
    resetPassword: jest.fn(),
    match: {
      params: {
        token: 'sometoken',
      },
    },
  };

  it('should change password field', () => {
    const wrapper = mount(
      <Router>
        <ResetPasswordComponent {...props} />
      </Router>,
    );
    const firstPassword = wrapper.find('#password-input').at(0);
    firstPassword.simulate('change', {
      persist: () => {},
      target: {
        name: 'password',
        value: 'Password9595!',
      },
    });
    expect(firstPassword.html()).toMatch('Password9595!');
    wrapper.unmount();
  });

  it('should change change confirm password field', () => {
    const handleSubmit = jest.fn();
    const wrapper = mount(
      <Router>
        <ResetPasswordComponent onSubmit={handleSubmit} {...props} />
      </Router>,
    );

    const confirmPassword = wrapper.find('#confirm-password').at(0);
    confirmPassword.simulate('change', {
      persist: () => {},
      target: {
        name: 'confirmPassword',
        value: 'Password9595!',
      },
    });
    expect(confirmPassword.html()).toMatch('Password9595!');
    wrapper.unmount();
  });

  it('should display loading on submit', () => {
    const wrapper = mount(
      <Router>
        <ResetPasswordComponent loading match={props.match} success={false} message="" resetPassword={jest.fn()} />
      </Router>,
    );
    expect(wrapper.find('.loading').length).toEqual(1);
    wrapper.unmount();
  });

  it('should submit new password successfully', () => {
    const wrapper = mount(
      <Router>
        <ResetPasswordComponent {...props} />
      </Router>,
    );
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(props.resetPassword).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });
});
