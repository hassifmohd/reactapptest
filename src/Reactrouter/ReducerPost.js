import * as Config from './Config';

const DEFAULT_STATE = {
    posts: [],
    post: null,
};

export default function(state = [], action) {
    switch(action.type){
        case Config.FETCT_POSTS:
        return { ...state, posts: action.payload.data};
        break;
    }

    return state;
}
