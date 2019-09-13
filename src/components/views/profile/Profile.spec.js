import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Profile from './Profile';

const initialState = {
  profile: {
    profile: {
      firstName: 'Shokoloko',
      lastName: 'Bangoshe',
      userFollowers: 4,
      userFollowing: 3,
      profileavatar: 'https://google.com/img.png',
    },
    articles: [],
    loading: false,
  },
  errors: {},
  articles: [],
  loading: false,
  articlesLoading: false,
  auth: { user: {} },
};

const props = {
  profile: {
    id: '1a9589fb-5b25-4df9-92ee-2b20ba4f9407',
    firstName: 'Shokoloko',
    lastName: 'Bangoshe',
    userFollowers: 4,
    userFollowing: 3,
    profileavatar: 'https://google.com/img.png',
    profilebio: 'My name my name is my name',
    loading: false,
    articles: [],
  },
  match: { params: { userId: '1a9589fb-5b25-4df9-92ee-2b20ba4f9407' } },
  user: { id: '1a9589fb-5b25-4df9-92ee-2b20ba4f9407' },
  fetchUserProfile: jest.fn(),
  fetchProfileArticles: jest.fn(),
  fetchUserOwnProfileArticles: jest.fn(),
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);
describe('<Profile /> Component', () => {
  beforeAll(() => {
    const div = document.createElement('div');
    window.domNode = div;
    document.body.appendChild(div);
  });

  it('should render the Profile component without crashing', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Profile {...props} />
        </Router>
      </Provider>,
      { attachTo: window.domNode },
    );
    expect(wrapper.find('.row').length).toEqual(1);
    expect(wrapper.find('.follower-stats').length).toEqual(1);
  });
});
