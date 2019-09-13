import React from 'react';
import { shallow, mount } from 'enzyme';
import TextArea from './textArea';

const props = {
  type: '',
  name: '',
  value: '',
  onChange: jest.fn(),
};

describe('InputForm Component', () => {
  it('Should render without errors in debug mode', () => {
    const component = shallow(<TextArea {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('Should render along with children componenet', () => {
    const component = mount(<TextArea {...props} />);
    expect(component).toMatchSnapshot();
    expect(component.find('textarea')).toHaveLength(1);
  });
});
