import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import StarRating from './StarRating';

const initialState = {
  article: {
    articles: [],
  },
};

const props = {
  rateArticle: jest.fn(),
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

describe('Should render <StarRating /> component', () => {
  it('', () => {
    const wrapper = mount(<StarRating store={store} {...props} />);
    expect(wrapper.find('.star_rate_component').length).toEqual(1);
  });
});
