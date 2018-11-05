import fetch from '../api';
import { LOGIN, ADD, DELETE, SET_INFO, SET_FILTER } from '../constants';

const login = (userInfo)=> {
  return {
    type: LOGIN,
    userInfo
  }
};

export const loginCheck = obj => dispatch => (
  new Promise((resolve, reject)=> {
    fetch.postData('http://127.0.0.1:7001/api/login', obj).then(val=> {
      dispatch(login(val));
      resolve();
    }).catch(error=> {
      reject();
    })
  }) 
);

export const add = concat => {
  return {
    type: ADD,
    concat
  }
}

export const deleteC = index => {
  return {
    type: DELETE,
    index
  }
}

export const setInfo = (index, obj) => {
  return {
    type: SET_INFO,
    index,
    obj
  }
}

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
}
