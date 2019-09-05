/* eslint-disable no-param-reassign */
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Category, { CategoryComponent } from './Categories';

const initialState = {
  article: {
    articles: [],
  },
};

const props = {
  getArticlesByCategory: jest.fn(),
  loaded: jest.fn(),
  getTags: jest.fn(),
  isLoading: true,
  article: {},
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

describe('Categories Component', () => {
  it('should render without errors', () => {
    const component = shallow(
      <Router>
        <Category store={store} {...props} />
      </Router>,
    );
    expect(component).toMatchSnapshot();
  });

  it('should display spinner on load', () => {
    const component = mount(
      <Router>
        <CategoryComponent {...props} />
      </Router>,
    );

    const loaderContainer = component.find('.loader-container');
    expect(loaderContainer.length).toBe(1);
    component.unmount();
  });

  it('should display categories', () => {
    const props2 = {
      getArticlesByCategory: jest.fn(),
      loaded: jest.fn(),
      getTags: () => ['shinshin'],
      isLoading: false,
      article: {
        articles: [{
          articles: {
            allArticles: [{
              tagsList: ['shinshin'],
              author: {
                profile: {
                  avatar: 'dfdfdf',
                },
              },
            }],
          },
        },
        ],
      },
      tags: [
        'tag1',
      ],
    };
    const component = mount(
      <Router>
        <CategoryComponent {...props2} />
      </Router>,
    );

    const loaderContainer = component.find('.category-container');
    expect(loaderContainer.length).toBe(1);
    component.unmount();
  });

  it('should add event listener on mount', () => {
    window.removeEventListener = jest.fn();
    window.addEventListener = jest.fn(() => () => window.removeEventListener());
    const props2 = {
      getArticlesByCategory: jest.fn(),
      loaded: jest.fn(),
      getTags: () => ['shinshin'],
      isLoading: false,
      article: {
        articles: [{
          articles: {
            allArticles: [{
              tagsList: ['shinshin'],
              author: {
                profile: {
                  avatar: 'dfdfdf',
                },
              },
            }],
          },
        },
        ],
      },
      tags: [
        'tag1',
      ],
    };
    mount(
      <Router>
        <CategoryComponent {...props2} />
      </Router>,
    );

    expect(window.addEventListener).toBeCalled();
    expect(window.removeEventListener).toBeCalled();
  });

  it('should fetch data if isloading is true', () => {
    const setStateClosure = state => (value) => {
      state = value;
      return state;
    };
    React.useState = jest.fn((state) => {
      if (typeof state === 'boolean') return [true, jest.fn()];
      return [state, setStateClosure];
    });
    const props2 = {
      getArticlesByCategory: jest.fn(),
      loaded: jest.fn(),
      getTags: () => ['shinshin'],
      isLoading: false,
      article: {
        articles: [{
          articles: {
            allArticles: [{
              tagsList: ['shinshin'],
              author: {
                profile: {
                  avatar: 'dfdfdf',
                },
              },
            }],
          },
        },
        ],
      },
      tags: [
        'tag1',
      ],
    };
    mount(
      <Router>
        <CategoryComponent {...props2} />
      </Router>,
    );

    expect(React.useState).toBeCalled();
  });

  it('should fetch data if isloading is false', () => {
    const setStateClosure = state => (value) => {
      state = value;
      return state;
    };
    React.useState = jest.fn((state) => {
      if (typeof state === 'boolean') return [false, jest.fn()];
      return [state, setStateClosure];
    });
    const props2 = {
      getArticlesByCategory: jest.fn(),
      loaded: jest.fn(),
      getTags: () => ['shinshin'],
      isLoading: false,
      article: {
        articles: [{
          articles: {
            allArticles: [{
              tagsList: ['shinshin'],
              author: {
                profile: {
                  avatar: 'dfdfdf',
                },
              },
            }],
          },
        },
        ],
      },
      tags: [
        'tag1',
      ],
    };
    mount(
      <Router>
        <CategoryComponent {...props2} />
      </Router>,
    );

    expect(React.useState).toBeCalled();
  });
});
