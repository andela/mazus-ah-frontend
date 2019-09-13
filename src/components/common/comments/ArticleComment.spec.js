import React from 'react';
import configureMockStore from 'redux-mock-store';
import ArticleComment from './ArticleCommentList';
import { ArticleCommentFormComponent } from './ArticleCommentForm';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Article comment component', () => {
  it('should render the component without crashing', () => {
    const props = {
      body: '',
      likes: 10,
      user: {
        id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
        firstName: 'Tunji',
        lastName: 'Abioye',
        profile: {
          title: 'The Curious Case of Benjamin Buttons',
          avatar: 'getting-started-with-nodejs-&-express-1564498223366-74536',
        },
      },
      createdAt: '',
    };
    const component = shallow(<ArticleComment {...props} />);
    expect(component.find('img')).toHaveLength(1);
  });

  it('should render the component without crashing', () => {
    const props = {
      createArticleOnComment: jest.fn(),
      match: {
        params: { slug: 'some-slug' },
      },
    };
    const component = shallow(<ArticleCommentFormComponent {...props} />);

    expect(component.find('button')).toHaveLength(1);
  });

  it('should call onSubmit prop function when form is submitted', () => {
    const handleSubmit = jest.fn();

    const props = {
      createArticleOnComment: jest.fn(),
      match: {
        params: { slug: 'some-slug' },
      },
      onSubmit: handleSubmit,
    };
    const wrapper = mount(<ArticleCommentFormComponent {...props} />);
    const form = wrapper.find('form');
    form.simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('should call onChange props for textarea input', () => {
    const handleSubmit = jest.fn();
    const props = {
      createArticleOnComment: jest.fn(),
      match: {
        params: { slug: 'some-slug' },
      },
      onSubmit: handleSubmit,
    };

    const wrapper = mount(
      <ArticleCommentFormComponent store={store} {...props} />,
    );
    const textareaInput = wrapper.find('textarea[type="text"]');
    textareaInput.simulate('change', {
      persist: () => { },
      target: {
        name: 'comment',
        value: 'This is a comment',
      },
    });
    expect(wrapper.find('textarea[type="text"]').length).toEqual(1);
    expect(textareaInput.html()).toMatch('This is a comment');
    wrapper.unmount();
  });
});
