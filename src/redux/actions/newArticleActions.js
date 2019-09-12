import { message as alert } from 'antd';
import '@Common/antAlert.scss';
import API_SERVICE from '@Utils/API';

import {
  PUBLISHING_ARTICLE,
  PUBLISH_SUCCESS,
  PUBLISH_FAILURE,
} from './types/newArticleType';

export const publishArticle = () => ({
  type: PUBLISHING_ARTICLE,
  payload: {
    loading: true,
  },
});

export const publishSuccess = article => ({
  type: PUBLISH_SUCCESS,
  payload: {
    loading: false,
    article,
  },
});

export const publishFail = error => ({
  type: PUBLISH_FAILURE,
  payload: {
    loading: false,
    error,
  },
});

export const publishNewArticle = (articleData, history) => async (dispatch) => {
  dispatch(publishArticle());
  try {
    const newArticle = await API_SERVICE.post('/articles', articleData);
    alert.success('Article Successfully Created');
    dispatch(publishArticle(newArticle));
    return history.push('/');
  } catch (error) {
    const { data: { errors } } = error.response;
    const message = Object.values(errors)[0];
    alert.error(message);
    return dispatch(publishFail(message));
  }
};
