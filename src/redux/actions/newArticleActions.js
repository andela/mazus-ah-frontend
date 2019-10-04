import { message as alert } from 'antd';
import '@Common/antAlert.scss';
import API_SERVICE from '@Utils/API';

import {
  PUBLISHING_ARTICLE,
  PUBLISH_SUCCESS,
  PUBLISH_FAILURE,
} from './types/newArticleType';

export const publishingArticle = () => ({
  type: PUBLISHING_ARTICLE,
  payload: {
    loading: true,
  },
});

export const publishSuccess = newArticle => ({
  type: PUBLISH_SUCCESS,
  payload: {
    loading: false,
    newArticle,
  },
});

export const publishFail = error => ({
  type: PUBLISH_FAILURE,
  payload: {
    loading: false,
    error,
  },
});

export const publishNewArticle = (status, articleData, history) => async (dispatch) => {
  const articles = articleData;
  dispatch(publishingArticle());
  try {
    articles.status = status;
    const newArticle = await API_SERVICE.post('/articles', articleData);
    const articleStatus = newArticle.data.article.status;
    if (articleStatus === 'published') {
      alert.success('Article Successfully Created');
      dispatch(publishSuccess(newArticle.data.article));
      return history.push(`/article/${newArticle.data.article.slug}`);
    }
    alert.success('Article Saved to Drafts');
    dispatch(publishSuccess(newArticle.data.article));
    return history.push('*');
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    alert.error(message);
    return dispatch(publishFail(message));
  }
};
