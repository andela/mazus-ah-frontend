import React from 'react';
import ShareArticle from './ShareArticle';

describe('<ShareArticle /> Component', () => {
  const props = {
    title: 'Article Title',
  };

  it('should mount component successfully', () => {
    const wrapper = mount(
      <ShareArticle {...props} />,
    );
    const iconsContainer = wrapper.find('.share-icons-wrapper');
    expect(iconsContainer.length).toBe(1);
    wrapper.unmount();
  });

  it('should display social-share icons on click event', () => {
    const wrapper = mount(
      <ShareArticle {...props} />,
    );
    const iconsContainer = wrapper.find('.share-icons-wrapper');
    iconsContainer.simulate('click');
    const svg = wrapper.find('svg');
    expect(svg.length).toBe(3);
    wrapper.unmount();
  });
});
