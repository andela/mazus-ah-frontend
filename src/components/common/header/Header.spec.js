import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HeaderComponent } from './Header';
import AuthenticatedHeader from './AuthenticatedHeader';
import UnauthenticatedHeader from './UnauthenticatedHeader';

describe('<AuthenticatedHeader /> Component', () => {
  it('should render the Authenticated Header without crashing', () => {
    const wrapper = shallow(<AuthenticatedHeader />);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('nav').length).toEqual(1);
  });
});

describe('<UnauthenticatedHeader /> Component', () => {
  it('should render the Unauthenticated Header without crashing', () => {
    const wrapper = shallow(<UnauthenticatedHeader />);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('nav').length).toEqual(1);
  });
});

describe('<Header /> Component', () => {
  it('should render the Non-Authenticated Header component without crashing', () => {
    const props = {
      isAuthenticated: false,
    };

    const wrapper = mount(
      <Router>
        <HeaderComponent {...props} />
      </Router>,
    );

    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('nav').length).toEqual(1);
    expect(wrapper.find('Link').length).toEqual(15);
    wrapper.unmount();
  });

  it('should render the Authenticated Header component without crashing', () => {
    const props = {
      isAuthenticated: true,
    };

    const wrapper = mount(
      <Router>
        <HeaderComponent {...props} />
      </Router>,
    );
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('nav').length).toEqual(1);
    expect(wrapper.find('Link').length).toEqual(16);
    expect(wrapper.find('img').length).toEqual(2);
    wrapper.unmount();
  });
});
