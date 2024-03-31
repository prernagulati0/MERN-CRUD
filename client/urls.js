const BASE_URL = `${process.env.REACT_APP_KONG_URL}/api`;
const URLS = {
  GET_ALL_USER: `${BASE_URL}/getAll`,
  GET_USER: `${BASE_URL}/getUser`,
  CREATE_USER: `${BASE_URL}/create`,
  DELETE_USER: `${BASE_URL}/delete`,
  EDIT_USER: `${BASE_URL}/update`,
};
export default URLS;
