import { combineReducers, createStore } from 'redux';
import BooksReducer from './reducer_books';
// const { applyMiddleware, createStore, combineReducers, bindActionCreators } = Redux;

const rootReducer = combineReducers({
    books: BooksReducer
});

let store = createStore(rootReducer);

// export default rootReducer;
export default store;
