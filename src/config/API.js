const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/v1' : 'https://mazus-ah-staging.herokuapp.com/api/v1';

export default API_URL;
