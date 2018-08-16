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

export function fetchPost(id) {

    console.log("Execute fetchPost().axios.post()");
    const theUrl = `http://reduxblog.herokuapp.com/api/posts/${id}&key=${Config.API_KEY}`;
    // http://reduxblog.herokuapp.com/api/posts/270259?key=123
    // console.log(theUrl);
    const request = axios.get(theUrl);

    return {
        type: Config.FETCH_POST,
        payload: request
    }
}