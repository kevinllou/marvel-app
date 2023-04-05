import { createStore } from 'redux';
import bookmarksReducer from './reducer';

const store = createStore(bookmarksReducer);

export default store;
