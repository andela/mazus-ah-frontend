import '@babel/polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import { instance } from '@Utils/API';
import {
  GET_PROFILE,
  PROFILE_LOADING,
  PROFILE_ERROR,
  PROFILE_ARTICLES_LOADING,
  GET_PROFILE_ARTICLES,
} from '@Types/profileType';
import { fetchUserProfile, fetchProfileArticles, fetchUserOwnProfileArticles } from './profileActions';

const mockStore = configureMockStore([thunk]);

describe('Profile Actions', () => {
  const store = mockStore({
    profile: {},
    errors: {},
    articles: [],
    loading: false,
    articlesLoading: false,
  });

  beforeEach(() => {
    moxios.install(instance);
    store.clearActions();
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });

  it('should dispatch PROFILE_LOADING and GET_PROFILE when getting a users profile', async () => {
    const successfulRequest = {
      data: {
        message: 'Profile fetched sucessfully',
        profile: {
          firstName: 'Mike',
          lastName: 'Will',
          id: '98739473-7fd9-08e4',
          profile: {
            id: '98739473-7fd9-08e4',
            bio: 'I love eating beans',
            avatar: 'https://res.cloudinary.com/mazus/image/upload/v1564080294/blog/2019-07-25T18:44:50.301Z.jpg',
          },
        },
      },
    };

    const successfulFollowersRequest = {
      data: {
        follows: { userFollowers: [] },
      },
    };

    const successfulFollowingRequest = {
      data: {
        follows: { userFollowings: [] },
      },
    };

    const expectedActions = [
      {
        type: PROFILE_LOADING,
        payload: true,
      },
      {
        type: GET_PROFILE,
        payload: {
          firstName: 'Mike',
          lastName: 'Will',
          id: '98739473-7fd9-08e4',
          profileid: '98739473-7fd9-08e4',
          profilebio: 'I love eating beans',
          profileavatar: 'https://res.cloudinary.com/mazus/image/upload/v1564080294/blog/2019-07-25T18:44:50.301Z.jpg',
          userFollowers: 0,
          userFollowing: 0,
        },
      },
    ];

    axios.get.mockResolvedValueOnce(successfulRequest);
    axios.get.mockResolvedValueOnce(successfulFollowersRequest);
    axios.get.mockResolvedValueOnce(successfulFollowingRequest);
    await store.dispatch(fetchUserProfile('98739473-7fd9-08e4'));
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });

  it('should dispatch PROFILE_LOADING and PROFILE_ERROR for a failed profile request', async () => {
    const failedRequest = {
      response: {
        data: {
          errors: {
            message: 'Something went wrong',
          },
        },
      },
    };

    const expectedActions = [
      {
        type: PROFILE_LOADING,
        payload: true,
      },
      {
        type: PROFILE_ERROR,
        payload: failedRequest.response,
      },
    ];

    axios.get.mockRejectedValue(failedRequest);
    await store.dispatch(fetchUserProfile('98739473-7fd9-08e4'));
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });

  it('should dispatch PROFILE_ARTICLES_LOADING and GET_PROFILE_ARTICLES when fetching articles for a profile', async () => {
    const successfulRequest = {
      data: {
        articles: [
          {
            id: '83hd-782h',
            body: 'Some title',
          },
        ],
      },
    };

    const expectedActions = [
      {
        type: PROFILE_ARTICLES_LOADING,
        payload: true,
      },
      {
        type: PROFILE_ARTICLES_LOADING,
        payload: false,
      },
      {
        type: GET_PROFILE_ARTICLES,
        payload: successfulRequest.data.articles,
      },
    ];

    axios.get.mockResolvedValue(successfulRequest);
    await store.dispatch(fetchProfileArticles('some-id'));
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });

  it('should dispatch PROFILE_ARTICLES_LOADING and PROFILE_ERROR for a failed profile articles request', async () => {
    const failedRequest = {
      response: {
        data: {
          errors: {
            message: 'Something went wrong',
          },
        },
      },
    };

    const expectedActions = [
      {
        type: PROFILE_ARTICLES_LOADING,
        payload: true,
      },
      {
        type: PROFILE_ARTICLES_LOADING,
        payload: false,
      },
      {
        type: PROFILE_ERROR,
        payload: failedRequest.response,
      },
    ];

    axios.get.mockRejectedValue(failedRequest);
    await store.dispatch(fetchProfileArticles('98739473-7fd9-08e4'));
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });

  it('should dispatch PROFILE_ARTICLES_LOADING and GET_PROFILE_ARTICLES when fetching articles for the profile owner', async () => {
    const successfulRequest = {
      data: {
        articles: [
          {
            id: '83hd-782h',
            body: 'Some title',
          },
        ],
      },
    };

    const expectedActions = [
      {
        type: PROFILE_ARTICLES_LOADING,
        payload: true,
      },
      {
        type: PROFILE_ARTICLES_LOADING,
        payload: false,
      },
      {
        type: GET_PROFILE_ARTICLES,
        payload: successfulRequest.data.articles,
      },
    ];

    axios.get.mockResolvedValue(successfulRequest);
    await store.dispatch(fetchUserOwnProfileArticles());
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });

  it('should dispatch PROFILE_ARTICLES_LOADING and PROFILE_ERROR for a failed profile articles request for the profile owner', async () => {
    const failedRequest = {
      response: {
        data: {
          errors: {
            message: 'Something went wrong',
          },
        },
      },
    };

    const expectedActions = [
      {
        type: PROFILE_ARTICLES_LOADING,
        payload: true,
      },
      {
        type: PROFILE_ARTICLES_LOADING,
        payload: false,
      },
      {
        type: PROFILE_ERROR,
        payload: failedRequest.response,
      },
    ];

    axios.get.mockRejectedValue(failedRequest);
    await store.dispatch(fetchUserOwnProfileArticles());
    const response = store.getActions();
    expect(response).toEqual(expectedActions);
  });
});
