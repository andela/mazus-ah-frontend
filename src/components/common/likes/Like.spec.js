import React from 'react';
import { Like } from './Like';

describe('Like component', () => {
  let component;
  const mockLikefn = jest.fn();
  beforeEach(() => {
    component = shallow(<Like likeArticle={mockLikefn} />);
  });
  it('should call the mock login function', () => {
    component.find('i').simulate(
      'click',
    );
    expect(mockLikefn.mock.calls.length).toBe(1);
  });
});
