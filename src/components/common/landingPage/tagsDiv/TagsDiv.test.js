import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import TagsDiv from './TagsDiv';


const defaultProps = {
  tags: [
    'lifestyle',
  ],
  setAllTags: jest.fn(),
};


const setUp = (overideProps = [], overideStore) => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    article: {
      tags: [],
    },
    ...overideStore,
  });
  const props = {
    ...defaultProps,
    ...overideProps,
  };
  return mount(
    <Provider store={store}>
      <MemoryRouter>
        <TagsDiv {...props} />
      </MemoryRouter>
    </Provider>,
  );
};
const allTags = {
  article: {
    tags: [
      'food',
      'nutrition',
      'health',
      'drinks',
    ],
  },
};

describe('<TrendingArticles /> Component', () => {
  it('should render component at initial state', () => {
    const wrapper = setUp(
      [],
    );
    expect(wrapper.find('Tag').length).toEqual(0);
  });
  it('should render component with tags', () => {
    const wrapper = setUp(
      {},
      allTags,
    );
    expect(wrapper.find('Tag').length).toEqual(4);
    expect(wrapper.find('Tag').at(0).text()).toEqual('food');
    expect(wrapper.find('Tag').at(1).text()).toEqual('nutrition');
    expect(wrapper.find('Tag').at(2).text()).toEqual('health');
    expect(wrapper.find('Tag').at(3).text()).toEqual('drinks');
  });
});
