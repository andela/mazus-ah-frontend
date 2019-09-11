import '@babel/polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { instance } from '@Utils/API';
import {
  GET_SINGLE_ARTICLE,
  ARTICLE_LOADING,
  GET_ARTICLE_ERROR,
  CLEAR_ARTICLE_ERROR,
} from './types/articleType';
import { getArticleBySlug } from './articleActions';

const mockStore = configureMockStore([thunk]);

const articleResponse = {
  isPaid: false,
  ratings: 5,
  id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
  title: 'The Curious Case of Benjamin Buttons',
  slug: 'getting-started-with-nodejs-&-express-1564498223366-74536',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu. Dolor sit amet consectetur adipiscing. Vitae semper quis lectus nulla at volutpat diam ut. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Nunc sed blandit libero volutpat. In egestas erat imperdiet sed euismod. Neque convallis a cras semper auctor neque vitae tempus. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Lacus vel facilisis volutpat est velit egestas dui id. Non nisi est sit amet facilisis magna. Pulvinar sapien et ligula ullamcorper malesuada. Ipsum consequat nisl vel pretium. Elit eget gravida cum sociis. Lacinia at quis risus sed vulputate odio ut. Laoreet non curabitur gravida arcu. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Magna fringilla urna porttitor rhoncus dolor. Amet dictum sit amet justo donec enim diam vulputate ut. Sit amet est placerat in.',
  tagsList: [
  ],
  status: 'published',
  userId: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
  readTime: 3,
  createdAt: '2019-07-30T14:50:23.368Z',
  updatedAt: 'Unknown Type: date',
  author: {
    id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
    firstName: 'Darth',
    lastName: 'Vader',
    email: 'darthssvader@gmail.com',
    profile: {
      id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
      userId: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
      bio: 'I am just a guy who loves to code, bro',
      avatar: 'https://www.instagram.com/darth_vader/img.jpg',
      createdAt: '2019-07-30T14:00:23.458Z',
      updatedAt: 'Unknown Type: date',
    },
  },
  relatedArticles: [],
};

jest.mock('axios');

describe('Get single article action', () => {
  const store = mockStore({
    articleReducer: {
      articles: [],
      article: {},
      loading: false,
      error: {},
    },
  });

  beforeEach(() => {
    moxios.install(instance);
    store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall(instance);
  });

  it('should dispatch ARTICLE LOADING and GETTING SINGLE ARTICLE when getting an article by slug', async () => {
    const successfulRequest = {
      data: {
        article: articleResponse,
      },
    };

    const expectedActions = [
      {
        type: CLEAR_ARTICLE_ERROR,
        payload: {
          error: {},
        },
      },
      {
        type: ARTICLE_LOADING,
        payload: { loading: true },
      },
      {
        type: GET_SINGLE_ARTICLE,
        payload: {
          loading: false,
          article: articleResponse,
        },
      },
    ];

    axios.get.mockResolvedValue(successfulRequest);
    await store.dispatch(getArticleBySlug());
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });

  it('should dispatch ARTICLE LOADING and GET_ARTICLE_ERROR for an errored request', async () => {
    const failedRequest = {
      response: {
        data: {
          errors: {
            article: 'Article not found',
          },
        },
      },
    };

    const expectedActions = [
      {
        type: CLEAR_ARTICLE_ERROR,
        payload: {
          error: {},
        },
      },
      {
        type: ARTICLE_LOADING,
        payload: {
          loading: true,
        },
      },
      {
        type: GET_ARTICLE_ERROR,
        payload: {
          loading: false,
          error: {
            article: 'Article not found',
          },
        },
      },
    ];

    axios.get.mockRejectedValue(failedRequest);
    await store.dispatch(getArticleBySlug());
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });
});
