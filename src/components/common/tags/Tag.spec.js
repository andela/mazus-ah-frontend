import React from 'react';
import Tag from './Tag';

describe('Tag component', () => {
  it('should render the tag component with a prop passed to it', () => {
    const props = {
      tagName: 'NodeJS',
    };

    const component = shallow(<Tag {...props} />);
    expect(component.find('Link').length).toEqual(1);
  });
});
