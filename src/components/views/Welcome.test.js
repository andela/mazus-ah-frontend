import React from 'react';
import Welcome from './Welcome';

it('renders correctly', () => {
  const wrapper = mount(<Welcome />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
