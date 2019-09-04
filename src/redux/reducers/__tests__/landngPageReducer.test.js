import {
  SET_ARTICLES, SET_TAGS, SET_TRENDING_ARTICLES, LOADING,
} from '@Actions/types/landingPage';
import articleReducer from '../landingPageReducer';

describe('test article reducer at the initial state', () => {
  const initialState = {
    articles: [],
    isLoading: true,
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
        isLoading: true,
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
        isLoading: true,
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
        isLoading: true,
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
        isLoading: true,
        articles: [],
      },
    );
  });
});
