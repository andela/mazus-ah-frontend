import {
  articleLoading,
  getSingleArticle,
  articleError,
  getArticles,
} from '@Redux/actions/articleActions';
import articleReducer, { initialState } from '../articleReducer';

let action;
let newState;
const article = {
  isPaid: false,
  ratings: 5,
  id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
  title: 'The Curious Case of Benjamin Buttons',
  slug: 'getting-started-with-nodejs-&-express-1564498223366-74536',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id eu. Dolor sit amet consectetur adipiscing. Vitae semper quis lectus nulla at volutpat diam ut. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Nunc sed blandit libero volutpat. In egestas erat imperdiet sed euismod. Neque convallis a cras semper auctor neque vitae tempus. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Lacus vel facilisis volutpat est velit egestas dui id. Non nisi est sit amet facilisis magna. Pulvinar sapien et ligula ullamcorper malesuada. Ipsum consequat nisl vel pretium. Elit eget gravida cum sociis. Lacinia at quis risus sed vulputate odio ut. Laoreet non curabitur gravida arcu. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Magna fringilla urna porttitor rhoncus dolor. Amet dictum sit amet justo donec enim diam vulputate ut. Sit amet est placerat in.',
  tagsList: [
    'technology',
    'NodeJS',
    'Express',
  ],
  status: 'published',
  userId: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
  readTime: 3,
  createdAt: '2019-07-30T14:50:23.368Z',
  updatedAt: 'Unknown Type: date',
  author: {
    id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
    firstName: 'Darth',
    lastName: 'Vader',
    email: 'darthssvader@gmail.com',
    profile: {
      id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
      userId: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
      bio: 'I am just a guy who loves to code, bro',
      avatar: 'https://www.instagram.com/darth_vader/img.jpg',
      createdAt: '2019-07-30T14:00:23.458Z',
      updatedAt: 'Unknown Type: date',
    },
  },
};
const error = 'Article not found';

describe('Article reducer', () => {
  it('should return the initial state for an unknown action type', () => {
    action = { type: null };
    newState = articleReducer(initialState, action);
    expect(newState).toEqual(initialState);
    expect(newState.error).toEqual({});
    expect(newState.loading).toEqual(false);
    expect(newState.article).toEqual({});
    expect(newState.articles).toEqual([]);
  });

  it('should handle an article action type with ARTICLE_LOADING', () => {
    const { type, payload } = articleLoading();
    newState = articleReducer(initialState, { type, payload });
    expect(type).toEqual('ARTICLE(S) LOADING');
    expect(payload.loading).toEqual(true);
  });

  it('should handle an article action with type GETTING SINGLE ARTICLE', () => {
    const { type, payload } = getSingleArticle(article);
    newState = articleReducer(initialState, { type, payload });
    expect(type).toEqual('GETTING SINGLE ARTICLE');
    expect(payload.article).toEqual(article);
    expect(payload.loading).toEqual(false);
  });

  it('should handle an article action with type ERROR GETTING ARTICLE', () => {
    const { type, payload } = articleError(error);
    newState = articleReducer(initialState, { type, payload });
    expect(type).toEqual('ERROR GETTING ARTICLE');
    expect(payload.loading).toEqual(false);
    expect(payload.error).toEqual(error);
  });

  it('should handle an action with type GET_ARTICLES', () => {
    const { type, payload } = getArticles();
    newState = articleReducer(initialState, { type, payload });
    expect(type).toEqual('GET_ARTICLES');
    expect(payload.loading).toEqual(false);
    expect(payload.articles).toEqual([]);
  });
});
