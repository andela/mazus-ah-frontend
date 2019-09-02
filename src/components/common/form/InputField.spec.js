import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from './InputField';

const props = {
  type: '',
  name: '',
  value: '',
  onChange: jest.fn(),
};

describe('InputForm Component', () => {
  it('Should render without errors in debug mode', () => {
    const component = shallow(<Input {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children componenet', () => {
    const component = mount(<Input {...props} />);
    expect(component).toMatchSnapshot();
    expect(component.find('input')).toHaveLength(1);
  });
});
