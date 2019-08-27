import React from 'react';
import NotFound from './NotFound';

it('renders correctly', () => {
  const wrapper = mount(<NotFound />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
