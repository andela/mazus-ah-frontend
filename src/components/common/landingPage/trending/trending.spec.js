import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import TrendingArticles from './Trending';


const defaultProps = {
  trends: {
    id: '28515083-de5f-4449-8787-cedc77094428',
    title: 'Vegans and clear Skin',
    description: 'Vegans beauty tips',
    createdAt: '2019-08-29T16:04:58.809Z',
    readTime: 5,
  },
  getTrendingArticles: jest.fn(),
};


const setUp = (overideProps = {}, overideStore) => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({
    article: {
      trends: {},
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
        <TrendingArticles {...props} />
      </MemoryRouter>
    </Provider>,
  );
};


describe('<TrendingArticles /> Component', () => {
  it('should render component at initial state', () => {
    const wrapper = setUp();
    expect(wrapper.find('p').length).toEqual(1);
  });
  it('should render component with articles', () => {
    const trendingArticles = {
      article: {
        trends: {
          articles: [
            {
              id: '28515083-de5f-4449-8787-cedc77094426',
              title: 'How to Catch a Goat',
              description: 'Goats are very notorious herbivores',
              createdAt: '2019-09-01',
              readTime: 5,
            },
          ],
        },
      },
    };
    const wrapper = setUp(
      {},
      trendingArticles,
    );
    expect(wrapper.find('.trending-container')).toBeTruthy();
    expect(wrapper.find('.trending-container').length).toEqual(1);
    expect(wrapper.find('#article-number').text()).toEqual('1');
    expect(wrapper.find('Link').text()).toEqual('How to Catch a Goat');
    expect(wrapper.find('p').length).toEqual(3);
    expect(wrapper.find('p').at(1).text()).toEqual('Goats are very notorious herbivores');
  });
});
