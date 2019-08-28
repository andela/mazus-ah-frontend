import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
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
  it('should render the Header component without crashing', () => {
    const wrapper = mount(
      <Router>
        <Header />
      </Router>,
    );
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('nav').length).toEqual(1);
  });
});
