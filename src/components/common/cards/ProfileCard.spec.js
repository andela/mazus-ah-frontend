import React from 'react';
import ProfileCard from './ProfileCard';

describe('<ProfileCard /> Component', () => {
  it('should render the Profile Card component without crashing', () => {
    const wrapper = shallow(<ProfileCard />);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('span').length).toEqual(2);
    expect(wrapper.find('.profile-view').length).toEqual(1);
  });
});
