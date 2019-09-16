import {
  articleLoading,
  getSingleArticle,
  articleError,
  getArticles,
  clearArticleError,
  createArticleComment,
  articleStat,
  setArticleReaction,
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

const stateArticle = {
  id: 'c7baa165-6142-4b4c-b60a-bdfb277d1bf1',
  title: 'A 5-Minute Ride Proves the Future of Air Travel Is Already Here',
  slug: 'a-5-minute-ride-proves-the-future-of-air-travel-is-already-here-1568051107848',
  body: '{"time":1568051107848,"blocks":[{"type":"image","data":{"url":"https://miro.medium.com/max/2048/1*rATi2Mvr9c0lMt_r4zbZcQ.jpeg",over we know is going to be a reality. It’s not an if, it’s a when.”"}}],"version":"2.15.0"}',
  description: 'It’s fast — and expensive',
  isPaid: false,
  userId: 'fdfe8617-208d-4b87-a000-5d6840786ab8',
  createdAt: '2019-09-09T14:33:53.037Z',
  updatedAt: '2019-09-13T07:32:44.414Z',
  author: {
    id: 'fdfe8617-208d-4b87-a000-5d6840786ab8',
    firstName: 'Mike',
    lastName: 'Mike',
    email: 'mikemike@test.com',
    profile: {
      id: 'fdfe8317-208d-4b87-a000-5d6840186ab8',
      userId: 'fdfe8617-208d-4b87-a000-5d6840786ab8',
      bio: 'i think we all loving coding and little faffing',
      avatar: 'https://image.flaticon.com/icons/svg/147/147144.svg',
      createdAt: '2019-09-09T14:33:55.282Z',
      updatedAt: '2019-09-09T14:33:55.282Z',
    },
  },
  articlecomment: [
    {
      id: 'c44dbc94-38c7-4638-bd7b-94f65cd43d6b',
      body: 'james',
      likes: 0,
      highlightedText: null,
      containsHighlightedText: false,
      createdAt: '2019-09-11T18:54:42.691Z',
      updatedAt: '2019-09-11T18:54:42.691Z',
      user: {
        firstName: 'John',
        lastName: 'Done',
        email: 'johndoe@test.com',
        id: 'ffe25dbe-29ea-4759-8461-ed116f6739dd',
        profile: {
          id: 'ffe23dbe-19ea-4759-8461-ed116f6739dd',
          userId: 'ffe25dbe-29ea-4759-8461-ed116f6739dd',
          bio: 'i think we all loving coding and little faffing',
          avatar: 'https://image.flaticon.com/icons/svg/147/147144.svg',
          createdAt: '2019-09-09T14:33:55.282Z',
          updatedAt: '2019-09-09T14:33:55.282Z',
        },
      },
    },
  ],
};

const comment = {
  id: '10ba038e-48da-487b-96e8-8d3b99b6d18a',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
  likes: 0,
  user: {
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
const reaction = {
  likes: 0,
  dislikes: 0,
};

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

  it('should handle an create comment action with type CREATE COMMENT', () => {
    const { type, payload } = createArticleComment(comment);
    initialState.article = stateArticle;
    newState = articleReducer(initialState, { type, payload });
    expect(newState).toMatchSnapshot();
    expect(type).toEqual('CREATE_COMMENT');
    expect(payload.comment).toEqual(comment);
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

  it('it should handle an action with type CLEAR_ARTICLE_ERROR', () => {
    const { type, payload } = clearArticleError();
    newState = articleReducer(initialState, { type, payload });
    expect(type).toEqual('CLEARING ARTICLE ERROR');
    expect(payload.error).toEqual({});
  });
  it('it should handle an action with type GET_ARTICLE_STAT', () => {
    const { type, payload } = articleStat();
    newState = articleReducer(initialState, { type, payload });
    expect(type).toEqual('GET_ARTICLE_STAT');
  });
  it('it should handle an action with type SET_ARTICLE_LIKE', () => {
    const { type, payload } = setArticleReaction(reaction);
    initialState.article = stateArticle;
    newState = articleReducer(initialState, { type, payload });
    expect(type).toEqual('SET_ARTICLE_REACTION');
    expect(payload).toEqual(reaction);
  });
});
