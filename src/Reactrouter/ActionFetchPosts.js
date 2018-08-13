import axios from 'axios';
import * as Config from './Config';

const ROOL_URL = `http://reduxblog.herokuapp.com/api/posts?key=${Config.API_KEY}`;

export function fetchPosts() {

    console.log("Execute fetchPosts().axios.get()");
    const request = axios.get(ROOL_URL);

    return {
        type: Config.FETCT_POSTS,
        payload: request
    }
}

export function createPost(props) {

    console.log("Execute createPost().axios.post()");
    const request = axios.post(ROOL_URL, props);

    return {
        type: Config.CREATE_POSTS,
        payload: request
    }
}
