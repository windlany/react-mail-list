import { combineReducers } from 'redux';
import user from './module/user';
import concats from './module/concats';
import visible from './module/visible';

export default combineReducers({
  user,
  concats,
  filter: visible
})
