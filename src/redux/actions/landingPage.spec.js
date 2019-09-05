import '@babel/polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { instance } from '@Utils/API';
import { getTags, getTrendingArticles, getArticlesByCategory } from './landingPageActions';
import { SET_TAGS, SET_TRENDING_ARTICLES, SET_ARTICLES, SET_ERROR } from './types/landingPage';

const mockStore = configureMockStore([thunk]);

const tagResponse = {
  tags: [
    'fashion',
    'denim',
  ],
};

jest.mock('axios');

describe('Test actions for articles', () => {
  const store = mockStore({
    articleReducer: {
      articles: [],
      tags: tagResponse,
      trends: [],
      isLoading: false,
    },
  });
  beforeEach(() => {
    moxios.install(instance);
    store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });
  it('should dispatch SET_TAGS', async () => {
    const successfulRequest = {
      data: {
        tags: [
          'shally',
          'billy',
          'tally',
        ],
      },
    };
    const expectedAction = [{
      payload: [
        'shally',
        'billy',
        'tally',
      ],
      type: SET_TAGS,
    }];
    await axios.get.mockResolvedValue(successfulRequest);
    await store.dispatch(getTags());
    const response = store.getActions();
    expect(response).toEqual(expectedAction);
  });
  it('should dispatch SET_TRENDING_ARTICLES', async () => {
    const successfulRequest = {
      data: {
        trends: [
          {
            id: 'aabcd5773',
            title: 'Three Bad Guys: The Return of Sam',
          },
          {
            id: 'aabcd5873',
            title: 'Three Bad Guys: The Last One',
          },
        ],
      },
    };
    const expectedAction = [{
      payload: [
        {
          id: 'aabcd5773',
          title: 'Three Bad Guys: The Return of Sam',
        },
        {
          id: 'aabcd5873',
          title: 'Three Bad Guys: The Last One',
        },
      ],
      type: SET_TRENDING_ARTICLES,
    }];
    await axios.get.mockResolvedValue(successfulRequest);
    await store.dispatch(getTrendingArticles());
    const response = store.getActions();
    expect(response).toEqual(expectedAction);
  });
  it('should dispatch SET_ARTICLES', async () => {
    const successfulRequest = {
      data: {
        articles: [
          {
            articles: {
              allArticles: [
                [
                  {
                    id: 'aabcd5773',
                    title: 'Three Bad Guys: The Return of Sam',
                    tags: [
                      'novel',
                    ],
                  },
                  {
                    id: 'aabcd5873',
                    title: 'Three Bad Guys: The Last One',
                    tags: [
                      'novel',
                    ],
                  },
                ],
              ],
            },
          },
          {
            articles: {
              allArticles: [
                [
                  {
                    id: 'aabcd5773',
                    title: 'Three Bad Guys: The Return of Sam',
                    tags: [
                      'novel',
                    ],
                  },
                  {
                    id: 'aabcd5873',
                    title: 'Three Bad Guys: The Last One',
                    tags: [
                      'novel',
                    ],
                  },
                ],
              ],
            },
          },
        ],
      },
    };
    const tags = [
      'bad',
      'novel',
      'victor',
      'victor',
      'victor',
      'victor',
      'victor',
      'victor',
      'victor',
      'victor',
    ];
    const expectedAction = [{
      type: 'SETTING_ARTICLES',
      payload: {
        articles: [
          {
            articles: {
              allArticles: [
                [
                  {
                    id: 'aabcd5773',
                    title: 'Three Bad Guys: The Return of Sam',
                    tags: [
                      'novel',
                    ],
                  },
                  {
                    id: 'aabcd5873',
                    title: 'Three Bad Guys: The Last One',
                    tags: [
                      'novel',
                    ],
                  },
                ],
              ],
            },
          },
          {
            articles: {
              allArticles: [
                [
                  {
                    id: 'aabcd5773',
                    title: 'Three Bad Guys: The Return of Sam',
                    tags: [
                      'novel',
                    ],
                  },
                  {
                    id: 'aabcd5873',
                    title: 'Three Bad Guys: The Last One',
                    tags: [
                      'novel',
                    ],
                  },
                ],
              ],
            },
          },
        ],
      },
    }];
    await axios.get.mockResolvedValue(successfulRequest);
    await store.dispatch(getArticlesByCategory('bad', tags));
    const response = store.getActions();
    expect(response).toEqual(expectedAction);
  });
  it('should dispatch SET_ERROR for getting articles by category', async () => {
    const failedRequest = {
      response: {
        data: {
          errors: {
            message: 'Something went wrong, we are working on a fix',
          },
        },
      },
    };
    const tags = [
      'bad',
      'novel',
      'victor',
    ];
    const expectedAction = [{
      type: SET_ERROR,
      payload: 'Something went wrong, we are working on a fix',
    }];
    await axios.get.mockRejectedValue(failedRequest);
    await store.dispatch(getArticlesByCategory('bad', tags));
    const response = store.getActions();
    expect(response).toEqual(expectedAction);
  });
  it('should dispatch SET_ERROR for getting Trending Articles', async () => {
    const failedRequest = {
      response: {
        data: {
          errors: {
            message: 'Something went wrong, we are working on a fix',
          },
        },
      },
    };
    const expectedAction = [{
      type: SET_ERROR,
      payload: 'Something went wrong, we are working on a fix',
    }];
    await axios.get.mockRejectedValue(failedRequest);
    await store.dispatch(getTrendingArticles());
    const response = store.getActions();
    expect(response).toEqual(expectedAction);
  });
  it('should dispatch SET_ERROR for getting Tags', async () => {
    const failedRequest = {
      response: {
        data: {
          errors: {
            message: 'Something went wrong, we are working on a fix',
          },
        },
      },
    };
    const expectedAction = [{
      type: SET_ERROR,
      payload: 'Something went wrong, we are working on a fix',
    }];
    await axios.get.mockRejectedValue(failedRequest);
    await store.dispatch(getTags());
    const response = store.getActions();
    expect(response).toEqual(expectedAction);
  });
});
