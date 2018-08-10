import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import ReducerWeather from './ReducerWeather';

const reducers = combineReducers({

    // if we create store with a blank reducer, it will trigger error
    // so create blank reducer
    blankstate: (blankdata = {}) => blankdata,

    weather: ReducerWeather,
    
});

//we do all in one, combine reducers + create store + apply middleware = reducersStoreMiddleware
const reducersStoreMiddleware = applyMiddleware(ReduxPromise)(createStore)(reducers);

export default reducersStoreMiddleware;
