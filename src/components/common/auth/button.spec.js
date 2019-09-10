import React from 'react';
import { shallow } from 'enzyme';
import Button from './buttons';

describe('Button Component test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it('Should render without errors', () => {
    const component = wrapper.find('[data-test="buttonTest"]');
    expect(component.length).toBe(1);
  });
});
