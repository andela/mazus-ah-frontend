/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { SET_TAGS, LOADING } from './types/landingPage';

const setTags = payload => ({
  type: SET_TAGS,
  payload,
});

export const getTags = () => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  try {
    const response = await axios.get('https://mazus-ah-staging.herokuapp.com/api/v1/articles/tags');
    console.log('CONSOLELLLLLLELE', response.data.tags);
    const { tags } = response.data;
    dispatch(setTags(tags));
  } catch (error) {
    console.log(error.response);
  }
};
