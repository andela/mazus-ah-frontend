import React from 'react';
import Thumbnail from './Thumbnail';

jest.mock('axios');

describe('Thumbnail component', () => {
  const getThumbnail = jest.fn();

  it('should render the component without crashing', () => {
    const component = mount(<Thumbnail getThumbnail={getThumbnail} />);
    expect(component.find('.thumbmail-wrapper')).toHaveLength(1);
  });

  it('should call onChange event when an image is selected', () => {
    const component = mount(<Thumbnail getThumbnail={getThumbnail} />);
    const imageInput = component.find('#upload-thumbnail');
    imageInput.simulate('change', {
      persist: () => { },
      target: {
        value: 'BengalTiger.jpg',
      },
    });
    expect((imageInput).length).toEqual(1);
  });
});
