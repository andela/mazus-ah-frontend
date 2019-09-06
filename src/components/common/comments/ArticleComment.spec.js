import React from 'react';
import ArticleComment from './ArticleComment';

describe('Article comment component', () => {
  it('should render the component without crashing', () => {
    const component = shallow(<ArticleComment />);

    expect(component.find('img')).toHaveLength(2);
    expect(component.find('div')).toHaveLength(12);
  });
});
