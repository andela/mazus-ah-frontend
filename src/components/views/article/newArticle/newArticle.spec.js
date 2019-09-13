import React from 'react';
import NewArticle from './NewArticle';

describe('New Article page test', () => {
  let button;
  let show;
  let input;
  const wrapper = shallow(<NewArticle />);
  beforeEach(() => {
    button = wrapper.find('.done');
    show = jest.fn();
    input = wrapper.find('#article_title');
  });

  it('should render New Article page successfully', () => {
    expect(wrapper.find('#editorjs').length).toEqual(1);
  });
  it('shows a modal when button is clicked', () => {
    button.simulate('click');
    expect(show).toHaveBeenCalled();
  });
  it('input should change', () => {
    wrapper.find('input[name="title"]').simulate('change', {
      target: {
        value: 'Three Bad Guys',
      },
    });
    expect(input).toEqual('Three Bad Guys');
  });
});
