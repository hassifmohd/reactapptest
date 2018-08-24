import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
// import { reducer as formReducer } from 'redux-form';

import PostsReducer from './PostsReducer';

const reducers = combineReducers({

    // if we create store with a blank reducer, it will trigger error
    // so create blank reducer
    blankstate: (blankdata = {}) => blankdata,

    posts: PostsReducer
});

//we do all in one, combine reducers + create store + apply middleware = reducersStoreMiddleware
const reducersStoreMiddleware = applyMiddleware(ReduxPromise)(createStore)(reducers);

export default reducersStoreMiddleware;
