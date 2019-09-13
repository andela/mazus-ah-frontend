import React from 'react';
import TagsInput from './TagsInput';

describe('TagsInput  component', () => {
  it('should render the component without crashing', () => {
    const component = shallow(<TagsInput />);
    expect(component.find('.tags-input')).toHaveLength(1);
    expect(component.find('input')).toHaveLength(1);
  });
});
