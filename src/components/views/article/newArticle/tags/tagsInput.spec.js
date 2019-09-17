import React from 'react';
import TagsInput from './TagsInput';

describe('TagsInput  component', () => {
  const selectedTags = jest.fn();
  const removeSelectedTags = jest.fn();
  it('should render the component without crashing', () => {
    const component = mount(<TagsInput />);
    expect(component.find('.tags-input')).toHaveLength(1);
    expect(component.find('input')).toHaveLength(1);
  });

  it('should call onChange event for tag input when a string is typed', () => {
    const component = mount(<TagsInput />);
    const TagInput = component.find('#tag-input');
    TagInput.simulate('change', {
      persist: () => { },
      target: {
        value: 'BengalTiger',
      },
    });
    expect((TagInput).length).toEqual(1);
    expect(TagInput.html()).toMatch('BengalTiger');
  });

  it('should call onKeyPress for an entered tag input', () => {
    const component = mount(<TagsInput selectedTags={selectedTags} />);
    const TagInput = component.find('#tag-input');
    TagInput.simulate('change', {
      persist: () => { },
      target: {
        value: 'BengalTiger',
      },
    });
    TagInput.simulate('keypress', { key: 'Enter' });
    expect(selectedTags).toHaveBeenCalledTimes(1);
  });

  it('should render nothing when the input field if empty', () => {
    const component = mount(<TagsInput selectedTags={selectedTags} />);
    const TagInput = component.find('#tag-input');
    TagInput.simulate('change', {
      persist: () => { },
      target: {
        value: '',
      },
    });
    TagInput.simulate('keypress', { key: 'Enter' });
    const renderedTag = component.find('span');
    expect(renderedTag.length).toEqual(0);
  });

  it('should render entered tag', () => {
    const component = mount(<TagsInput selectedTags={selectedTags} />);
    const TagInput = component.find('#tag-input');
    TagInput.simulate('change', {
      persist: () => { },
      target: {
        value: 'BengalTiger',
      },
    });
    TagInput.simulate('keypress', { key: 'Enter' });
    const renderedTag = component.find('span');
    expect(renderedTag.html()).toMatch('BengalTiger');
  });

  it('should remove tag', () => {
    const component = mount(<TagsInput
      selectedTags={selectedTags}
      removeSelectedTags={removeSelectedTags}
    />);
    const TagInput = component.find('#tag-input');
    TagInput.simulate('change', {
      persist: () => { },
      target: {
        value: 'BengalTiger',
      },
    });
    TagInput.simulate('keypress', { key: 'Enter' });
    const removeIcon = component.find('.material-icons');
    expect((removeIcon).length).toEqual(1);

    removeIcon.simulate('click');
    expect(removeSelectedTags).toHaveBeenCalledTimes(1);
  });
});
