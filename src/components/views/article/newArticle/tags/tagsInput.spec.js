import React from 'react';
import TagsInput from './TagsInput';

describe('TagsInput  component', () => {
  const addTags = jest.fn();
  const component = mount(<TagsInput onKeyUp={addTags} />);
  it('should render the component without crashing', () => {
    expect(component.find('.tags-input')).toHaveLength(1);
    expect(component.find('input')).toHaveLength(1);
  });
  it('should call onChange props for tag input', () => {
    const TagInput = component.find('#tag-input');
    TagInput.simulate('change', {
      persist: () => { },
      target: {
        value: 'BengalTiger',
      },
    });
    expect((TagInput).length).toEqual(1);
    expect(TagInput.html()).toMatch('BengalTiger');
    // component.unmount();
  });
});
