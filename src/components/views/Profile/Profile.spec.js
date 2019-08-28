import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Profile from './Profile';

describe('<Profile /> Component', () => {
  it('should render the Profile component without crashing', () => {
    const wrapper = mount(
      <Router>
        <Profile />
      </Router>,
    );
    expect(wrapper.find('.profile-tab-container').length).toEqual(1);
    expect(wrapper.find('.profile-articles').length).toEqual(1);
  });
});
