import fetch from '../api';
import { LOGIN } from '../constants';

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
