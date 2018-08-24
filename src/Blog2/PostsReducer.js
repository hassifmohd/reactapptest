import { FETCT_POSTS } from './Config';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {

        case FETCT_POSTS: return _.mapKeys(action.payload.data, 'id');
    }

    return state;
}