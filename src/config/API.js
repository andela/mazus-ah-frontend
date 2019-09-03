import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'development' ? 'https://mazus-ah-staging.herokuapp.com/api/v1' : 'https://mazus-ah-staging.herokuapp.com/api/v1';

const instance = axios.create({
  baseURL: API_URL,
});
const token = localStorage.getItem('jwtToken');

if (token) {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
}

const API_SERVICE = {
  get(endpoint) {
    return instance.get(endpoint);
  },
};

export default API_SERVICE;
