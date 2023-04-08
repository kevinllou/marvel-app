import { combineReducers } from 'redux';
import bookmarksReducer from './bookmarkReducer';
import hiddenReducer from './hiddenReducer';

const reducers = combineReducers({
  bookmarksReducer,
  hiddenReducer,
});

export default reducers;
