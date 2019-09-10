import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ContainerWrapper from './ContainerWrapper';
import ArticleComment from '../comments/ArticleCommentList';

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
  const user = {
    id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
    firstName: 'Tunji',
    lastName: 'Abioye',
    profile: {
      title: 'The Curious Case of Benjamin Buttons',
      avatar: 'getting-started-with-nodejs-&-express-1564498223366-74536',
    },
  };
  const props = {

    component: () => <ArticleComment user={user} />,
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
