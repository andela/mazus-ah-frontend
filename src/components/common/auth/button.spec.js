import React from 'react';
import { shallow } from 'enzyme';
import { ButtonComponent } from './buttons';

describe('Button Component test', () => {
  let wrapper;
  const mockCLick = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<ButtonComponent socialLink={mockCLick} />);
  });

  it('Should render without errors', () => {
    const component = wrapper.find('[data-test="buttonTest"]');
    expect(component.length).toBe(1);
  });
  it('should call the mock login function', () => {
    wrapper.find('button').at(0).simulate(
      'click',
    );
    expect(mockCLick.mock.calls.length).toBe(1);
  });
  it('should call the mock login function', () => {
    wrapper.find('button').at(1).simulate(
      'click',
    );
    expect(mockCLick.mock.calls.length).toBe(1);
  });
});
