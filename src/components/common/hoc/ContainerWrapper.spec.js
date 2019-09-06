import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ContainerWrapper from './ContainerWrapper';
import ArticleComment from '../comments/ArticleComment';

const initialState = {
  auth: {
    isAuthenticated: false,
    user: {},
  },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

describe('Container wrapper higher order component', () => {
  const props = {
    component: () => <ArticleComment />,
    render: () => ({}),
  };

  it('should render the component without crashing', () => {
    const wrapper = shallow(<ContainerWrapper {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render and return another component wrapped in a container', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <ContainerWrapper {...props} />
        </Router>
      </Provider>,
    );
    expect(wrapper.find('.container').length).toEqual(1);
    expect(wrapper.find('Route').length).toEqual(1);
    wrapper.unmount();
  });
});
