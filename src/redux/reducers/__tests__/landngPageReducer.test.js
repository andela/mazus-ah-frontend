import articleReducer from '../landingPageReducer';
import {
  SET_ARTICLES, SET_TAGS, SET_TRENDING_ARTICLES, LOADING,
} from '../../actions/types/landingPage';

describe('test article reducer at the initial state', () => {
  const initialState = {
    articles: [],
    loading: false,
    tags: [],
    trends: [],
  };
  it('should return the initial state', () => {
    expect(articleReducer(undefined, {})).toEqual(initialState);
  });

  it('should get articles', () => {
    const setArticleAction = {
      type: SET_ARTICLES,
      payload: {
        title: 'How to Catch Goat',
        description: 'Goats are very notorious herbivores',
      },
    };
    expect(articleReducer(initialState, setArticleAction)).toEqual(
      {
        tags: [],
        trends: [],
        loading: false,
        articles: [
          {
            title: 'How to Catch Goat',
            description: 'Goats are very notorious herbivores',
          },
        ],
      },
    );
  });
  it('should get tags', () => {
    const setTagsAction = {
      type: SET_TAGS,
      payload: ['goats'],
    };
    expect(articleReducer(initialState, setTagsAction)).toEqual(
      {
        tags: ['goats'],
        trends: [],
        loading: false,
        articles: [],
      },
    );
  });
  it('should get trending articles', () => {
    const setTrendingArticlesAction = {
      type: SET_TRENDING_ARTICLES,
      payload: [
        {
          title: 'How to Catch Goat',
          description: 'Goats are very notorious herbivores',
        },
      ],
    };
    expect(articleReducer(initialState, setTrendingArticlesAction)).toEqual(
      {
        tags: [],
        trends: [
          {
            title: 'How to Catch Goat',
            description: 'Goats are very notorious herbivores',
          },
        ],
        loading: false,
        articles: [],
      },
    );
  });
  it('should display loader', () => {
    const setLoadingAction = {
      type: LOADING,
      payload: true,
    };
    expect(articleReducer(initialState, setLoadingAction)).toEqual(
      {
        tags: [],
        trends: [],
        loading: true,
        articles: [],
      },
    );
  });
});
