import { combineReducers, createStore } from 'redux';
import Bookdatabase from './Bookdatabase';

const mysql = combineReducers({
    booksaaa: Bookdatabase,
    aspecificbook: Bookdatabase
});

let data = createStore(mysql);

export default data;
