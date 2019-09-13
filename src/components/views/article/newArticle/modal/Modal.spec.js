import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Modal from './Modal';

const initialState = {
  newArticle: {
    loading: false,
    article: {},
    error: {},
  },
  article: {},
};

const props = {
  showModal: jest.fn(),
  title: 'Is There a Tiger in the Woods',
  body: 'Summer in Siberia....',
  loading: false,
  history: { push: jest.fn },
  onClick: { publish: jest.fn() },
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);
describe('Modal /> Component', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <Modal {...props} />
      </Router>
    </Provider>,
  );
  it('should render the Moadal component without crashing', () => {
    expect(wrapper.find('.modal-content').length).toEqual(1);
    expect(wrapper.find('.desc-tags').length).toEqual(1);
  });
  it('should not have called publish button', () => {
    const onClick = jest.fn();
    const publishButton = wrapper.find('.publish-btn');
    expect((publishButton).length).toEqual(1);
    publishButton.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it('should call onChange props for description input', () => {
    const descriptionInput = wrapper.find('#description');
    descriptionInput.simulate('change', {
      persist: () => { },
      target: {
        value: 'Is There a Tiger in the woods',
      },
    });
    expect((descriptionInput).length).toEqual(1);
    expect(descriptionInput.html()).toMatch('Is There a Tiger in the woods');
    wrapper.unmount();
  });
});
