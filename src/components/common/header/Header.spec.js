/* eslint-disable max-len */
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import ConnectedHeader, { HeaderComponent } from './Header';
import { AuthenticatedHeaderComponent } from './AuthenticatedHeader';
import UnauthenticatedHeader from './UnauthenticatedHeader';

const initialState = {
  auth: {
    user: {},
    isAuthenticated: false,
    loading: false,
    error: {},
  },
};

const mockStore = configureMockStore();
const store = mockStore(initialState);

describe('<AuthenticatedHeader /> Component', () => {
  it('should render the Authenticated Header without crashing', () => {
    const props = {
      logout: jest.fn(),
      history: { push: jest.fn() },
      user: { id: '66fusd6-ksjdkj-78', avatar: 'https://google.com/i.png' },
      getProfile: jest.fn(),
    };
    const getCurrentUserProfile = jest.fn();
    const wrapper = mount(<Router><AuthenticatedHeaderComponent getProfile={getCurrentUserProfile} store={store} {...props} /></Router>);
    expect(wrapper.find('div').length).toEqual(2);
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
        <ConnectedHeader store={store} {...props} />
      </Router>,
    );
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('nav').length).toEqual(1);
    expect(wrapper.find('Link').length).toEqual(15);
    expect(wrapper.find('img').length).toEqual(1);
    wrapper.unmount();
  });
});
