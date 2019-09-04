import React from 'react';
import Loader from './loader';

describe('<loader /> Component', () => {
  it('should render loader component without crashing the app', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('.loader-container').length).toEqual(1);
  });
});
