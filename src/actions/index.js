import fetch from '../api';
import { LOGIN, ADD, DELETE, SET_INFO, SET_FILTER, SET_USER } from '../constants';

const login = (userInfo)=> { // 登录成功更新user信息
  return {
    type: LOGIN,
    userInfo
  }
};
export const loginCheck = obj => dispatch => ( // 登录
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
export const addAjax = obj => dispatch => ( // 添加
  new Promise((resolve, reject)=> {
    fetch.postData('', obj).then(()=> {
      dispatch(add(obj));
      resolve();
    }).catch(error=> {
      reject();
    })
  })
)

export const deleteC = index => {
  return {
    type: DELETE,
    index
  }
}

export const setInfo = (index, obj) => { // 设置联系人信息
  return {
    type: SET_INFO,
    index,
    obj
  }
}

export const setUser = user => { // 设置用户信息
  return {
    type: SET_USER,
    user
  }
}

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
}