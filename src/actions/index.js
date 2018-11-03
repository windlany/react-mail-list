import fetch from '../api';
import { LOGIN, DELETE, SET_INFO } from '../constants';

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