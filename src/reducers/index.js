import { combineReducers } from 'redux';
import logoutReducer from './logoutReducer';
import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer,
  logout: logoutReducer,
});
