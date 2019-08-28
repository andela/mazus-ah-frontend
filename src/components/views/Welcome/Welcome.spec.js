import React from 'react';
import Welcome from './Welcome';

describe('<Welcome /> Component', () => {
  it('should render the Welcome component without crashing', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h1').text()).toEqual('Hello Mazus');
  });
});
