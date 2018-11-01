import { combineReducers } from 'redux';
import user from './module/user';
import concats from './module/concats';

export default combineReducers({
  user,
  concats
})
