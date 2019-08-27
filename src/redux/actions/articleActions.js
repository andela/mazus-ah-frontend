import GET_ARTICLES from './types/articleType';

const articles = [];


const getArticles = () => (dispatch) => {
  dispatch({
    type: GET_ARTICLES,
    payload: articles,
  });
};

export { getArticles as default };
