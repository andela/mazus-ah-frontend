import React from 'react';
import ProfileTab from './ProfileTab';

describe('<ProfileTab /> Component', () => {
  it('should render the Profile Tab component without crashing', () => {
    const wrapper = shallow(<ProfileTab />);
    expect(wrapper.find('li').length).toEqual(4);
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('.profile-tab-container').length).toEqual(1);
    expect(wrapper.find('.profile-articles').length).toEqual(1);
  });
});
