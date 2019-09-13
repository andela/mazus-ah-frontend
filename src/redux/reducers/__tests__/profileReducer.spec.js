import {
  GET_PROFILE,
  PROFILE_LOADING,
  PROFILE_ERROR,
  PROFILE_ARTICLES_LOADING,
  GET_PROFILE_ARTICLES,
} from '@Types/profileType';
import profileReducer, { initialState } from '../profileReducer';

let action;
let newState;

describe('Profile Reducer', () => {
  it('should return the initial state for an unknow action type', () => {
    action = { type: null };
    newState = profileReducer(initialState, action);
    expect(newState).toEqual(initialState);
    expect(newState.errors).toEqual({});
    expect(newState.articles).toEqual([]);
    expect(newState.loading).toEqual(false);
    expect(newState.articlesLoading).toEqual(true);
  });

  it('should handle an action with type PROFILE_LOADING', () => {
    action = { type: PROFILE_LOADING, payload: true };
    newState = profileReducer(initialState, action);
    expect(action.type).toEqual(PROFILE_LOADING);
    expect(action.payload).toEqual(true);
    expect(newState.loading).toEqual(true);
  });

  it('should handle an action with type GET_PROFILE', () => {
    const profile = {
      firstName: 'Mike',
      lastName: 'Will',
      id: '98739473-7fd9-08e4',
      profile: {
        id: '98739473-7fd9-08e4',
        bio: 'I love eating beans',
        avatar: 'https://res.cloudinary.com/mazus/image/upload/v1564080294/blog/2019-07-25T18:44:50.301Z.jpg',
      },
    };
    action = { type: GET_PROFILE, payload: profile };
    newState = profileReducer(initialState, action);
    expect(action.type).toEqual(GET_PROFILE);
    expect(newState.profile).toEqual(profile);
  });

  it('should handle an action with type PROFILE_ERROR', () => {
    const error = { errors: 'Profile not found' };
    action = { type: PROFILE_ERROR, payload: error };
    newState = profileReducer(initialState, action);
    expect(action.type).toEqual(PROFILE_ERROR);
    expect(newState.errors).toEqual(error);
  });

  it('should handle an action with type PROFILE_ARTICLES_LOADING', () => {
    action = { type: PROFILE_ARTICLES_LOADING, payload: true };
    newState = profileReducer(initialState, action);
    expect(action.type).toEqual(PROFILE_ARTICLES_LOADING);
    expect(action.payload).toEqual(true);
    expect(newState.articlesLoading).toEqual(true);
  });

  it('should handle an action with type GET_PROFILE_ARTICLES', () => {
    const articles = [{}, {}];
    action = { type: GET_PROFILE_ARTICLES, payload: articles };
    newState = profileReducer(initialState, action);
    expect(action.type).toEqual(GET_PROFILE_ARTICLES);
    expect(action.payload).toEqual(articles);
    expect(newState.articles).toEqual(articles);
  });
});
