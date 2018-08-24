import { FETCT_POSTS, API_KEY } from './Config';
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

    return {
        type: FETCT_POSTS,
        payload: request
    };
}
