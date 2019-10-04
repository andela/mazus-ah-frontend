import '@babel/polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { instance } from '@Utils/API';
import {
  PUBLISHING_ARTICLE,
  PUBLISH_SUCCESS,
  PUBLISH_FAILURE,
} from './types/newArticleType';

import {
  publishNewArticle,
} from './newArticleActions';

const mockStore = configureMockStore([thunk]);
const articleData = {
  title: 'Three Bad Guys: A Crime of Passion',
  description: 'A Crime Story',
  body: 'Twas a brisk autumn evening',
  tags: ['thriller'],
  thumbnail: 'https://cloudy.com/tbg-acop.jpg',
};
jest.mock('axios');
describe('Create new article actions', () => {
  const store = mockStore({
    newArticleReducer: {
      loading: false,
      newArticle: {},
      error: {},
    },
  });

  beforeEach(() => {
    moxios.install(instance);
    store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall(instance);
    localStorage.clear();
  });

  it('should dispatch PUBLISHING_ARTICLE and PUBLISH_SUCCESS for saving to draft', async () => {
    const props = {
      history: { push: jest.fn },
      status: 'draft',
    };
    const articleResponse = {
      id: 'ab-345-dcb-666',
      title: 'Three Bad Guys: A Crime of Passion',
      description: 'A Crime Story',
      body: 'Twas a brisk autumn evening',
      tags: ['thriller'],
      thumbnail: 'https://cloudy.com/tbg-acop.jpg',
      status: 'draft',
      slug: 'Three-Bad-Guys-dcb-666',
    };
    const successfulRequest = {
      data: {
        article: articleResponse,
      },
    };

    const expectedActions = [
      {
        type: PUBLISHING_ARTICLE,
        payload: {
          loading: true,
        },
      },
      {
        type: PUBLISH_SUCCESS,
        payload: {
          loading: false,
          newArticle: articleResponse,
        },
      },
    ];

    axios.post.mockResolvedValue(successfulRequest);
    await store.dispatch(publishNewArticle(props.status, articleData, props.history));
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });
  it('should dispatch PUBLISHING_ARTICLE and PUBLISH_SUCCESS for creating an article', async () => {
    const props = {
      history: { push: jest.fn },
      status: 'published',
    };
    const articleResponse = {
      id: 'ab-345-dcb-666',
      title: 'Three Bad Guys: A Crime of Passion',
      description: 'A Crime Story',
      body: 'Twas a brisk autumn evening',
      tags: ['thriller'],
      thumbnail: 'https://cloudy.com/tbg-acop.jpg',
      status: 'published',
      slug: 'Three-Bad-Guys-dcb-666',
    };
    const successfulRequest = {
      data: {
        article: articleResponse,
      },
    };

    const expectedActions = [
      {
        type: PUBLISHING_ARTICLE,
        payload: {
          loading: true,
        },
      },
      {
        type: PUBLISH_SUCCESS,
        payload: {
          loading: false,
          newArticle: articleResponse,
        },
      },
    ];

    axios.post.mockResolvedValue(successfulRequest);
    await store.dispatch(publishNewArticle(props.status, articleData, props.history));
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });
  it('should dispatch PUBLISHING_ARTICLE and PUBLISH_FAILURE for creating a new article', async () => {
    const props = {
      history: { push: jest.fn },
    };
    const failedRequest = {
      response: {
        data: {
          errors: {
            message: 'Something went wrong, we are working on a fix',
          },
        },
      },
    };

    const expectedActions = [
      {
        type: PUBLISHING_ARTICLE,
        payload: {
          loading: true,
        },
      },
      {
        type: PUBLISH_FAILURE,
        payload: {
          loading: false,
          error: 'Something went wrong, we are working on a fix',
        },
      },
    ];

    axios.post.mockRejectedValue(failedRequest);
    await store.dispatch(publishNewArticle(props.status, articleData, props.history));
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });
});
