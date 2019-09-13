import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProfileCardComponent } from './ProfileCard';

const profile = {
  firstName: 'John',
  lastName: 'Doe',
  userFollowers: 4,
  userFollowing: 3,
  profileavatar: 'https://google.com/img.png',
};

const user = {
  id: '1a9589fb-5b25-4df9-92ee-2b20ba4f9407',
};

const match = {
  params: {
    userId: '1a9589fb-5b25-4df9-92ee-2b20ba4f9407',
  },
};

describe('<ProfileCard /> Component', () => {
  it('should render the Profile Card component without crashing', () => {
    const props = {
      profile,
      match,
      user,
    };

    const wrapper = mount(
      <Router>
        <ProfileCardComponent {...props} />
      </Router>,
    );

    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('span').length).toEqual(2);
    expect(wrapper.find('.profile-view').length).toEqual(1);
  });
});
