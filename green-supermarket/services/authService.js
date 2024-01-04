import axios from 'axios';

const AUTH_REST_API_URL = 'http://localhost:8080/api/auth'


export  const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_URL + '/register', registerObj);
export const loginAPICall = (email, password) => axios.post(AUTH_REST_API_URL + '/login', {email,password});
