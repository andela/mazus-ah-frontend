import {
  publishingArticle,
  publishSuccess,
  publishFail,
} from '@Redux/actions/newArticleActions';
import newArticleReducer, { initialState } from '../newArticleReducer';

let action;
let newState;
const newArticle = {
  title: 'Three Bad Guys: Crime of Passion',
  description: 'A violent one',
  body: 'Men from Rwanda',
  tags: ['thriller'],
  thumbnail: 'https://cloudy/somethumbnail',
};
const error = 'what an error';
describe('New Article Reducer', () => {
  it('should return initial state for unknown action types', () => {
    action = { type: null };
    newState = newArticleReducer(initialState, action);
    expect(newState).toEqual(initialState);
    expect(newState.error).toEqual({});
    expect(newState.article).toEqual({});
    expect(newState.loading).toEqual(false);
  });
  it('should handle action with type PUBLISHING_ARTICLE', () => {
    const { type, payload } = publishingArticle();
    newState = newArticleReducer(initialState, { type, payload });
    expect(type).toEqual('PUBLISHING_ARTICLE');
    expect(payload.loading).toEqual(true);
  });
  it('should handle action with type PUBLISH_SUCCESS', () => {
    const { type, payload } = publishSuccess(newArticle);
    newState = newArticleReducer(initialState, { type, payload });
    expect(type).toEqual('PUBLISH_SUCCESS');
    expect(payload.newArticle).toEqual(newArticle);
    expect(payload.loading).toEqual(false);
  });
  it('should handle action with type PUBLISH_FAILURE', () => {
    const { type, payload } = publishFail(error);
    newState = newArticleReducer(initialState, { type, payload });
    expect(type).toEqual('PUBLISH_FAILURE');
    expect(payload.loading).toEqual(false);
    expect(payload.error).toEqual(error);
  });
});
