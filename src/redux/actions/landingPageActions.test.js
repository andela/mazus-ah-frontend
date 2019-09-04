import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { getTags, getTrendingArticles, getArticlesByCategory } from './landingPageActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const urlToReach = 'http://mazus-ah-staging.herokuapp.com/api/v1';

describe('Test fetch action', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  afterEach(() => {
    nock.cleanAll();
  });
  it('should fetch all tags successfully', () => {
    const tags = {
      tags: [
        'fashion',
        'design',
      ],
    };
    nock(urlToReach)
      .persist()
      .get('/articles/tags')
      .reply(200, tags);
    return store.dispatch(getTags())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
  it('should successfully fetch articles by a category', () => {
    const articlesByCategory = {
      data: {
        articles: {
          allArticles: [
            {
              title: 'Three Bad Guys: The Return of Sam',
              description: 'Once again, the three bad guys embarked on a very long Journey',
            },
            {
              title: 'How to catch all your JS Bugs using Baygon360',
              description: 'Both in the virtual and real world, bugs will always...',
            },
          ],
        },
      },
    };
    nock(urlToReach)
      .persist()
      .get('/articles?tag=food&limit=2')
      .reply(200, articlesByCategory);
    return store.dispatch(getArticlesByCategory())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
  it('should fetch all trending articles successfully', () => {
    const trendingArticles = {
      articles: [
        {
          title: 'Three Bad Guys: The Return of Sam',
          description: 'Once again, the three bad guys embarked on a very long Journey',
        },
        {
          title: 'How to catch all your JS Bugs using Baygon360',
          description: 'Both in the virtual and real world, bugs will always...',
        },
      ],
    };
    nock(urlToReach)
      .persist()
      .get('/articles/trends')
      .reply(200, trendingArticles);
    return store.dispatch(getTrendingArticles())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});
