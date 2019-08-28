import React from 'react';
import NotFound from './NotFound';

describe('<NotFound /> Component', () => {
  it('should render the NotFound component without crashing', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('h3').text()).toEqual('MAZUS TEAM is still building out this app, your page cannot be found at the moment');
  });
});
