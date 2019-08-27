import GET_ARTICLES from '@Redux/actions/types/articleType';
import articleReducer from '../articleReducer';

describe('test article reducer', () => {
  const initialState = {
    articles: [],
  };
  it('should return the initial state', () => {
    expect(articleReducer(undefined, {})).toEqual(initialState);
  });

  it('should get articles', () => {
    const getArticleAction = {
      type: GET_ARTICLES,
      payload: [
        {
          id: 'abcdef',
          title: 'Getting Rich',
        },
      ],
    };
    expect(articleReducer(initialState, getArticleAction)).toEqual(
      {
        articles: [
          {
            id: 'abcdef',
            title: 'Getting Rich',
          },
        ],
      },
    );
  });
});
