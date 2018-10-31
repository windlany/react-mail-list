// function ajax(url, method, obj) {
//   return fetch(url, {
//     method: 'POST',
//     headers: new Headers({
//       'Content-Type': 'aplication/json'
//     }),
//     credentials: 'include', // 带cookie
//     body: JSON.stringify(obj)
//   })
// }

export default {
  postData: (url, obj)=> { // 登录、注册、添加联系人
    return new Promise((resolve, reject)=> {
      fetch(url, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'aplication/json'
        }),
        credentials: 'include', // 带cookie
        body: JSON.stringify(obj)
      })
      .then(res=> { return res.text(); })
      .then(val=> { resolve(val); })
      .catch((error)=> { reject(error); })
    })
  },
  getData: (url)=> { // 获取联系人、个人信息
    return new Promise((resolve, reject)=> {
      fetch(url, {
        method: 'GET',
        headers: new Headers({
          'Accept': 'aplication/json'
        }),
        credentials: 'include', // 带cookie
      })
      .then(res=> { return res.json(); })
      .then(val=> { resolve(val); })
      .catch(error=> { reject(error); })
    })
  },
  putData: (url, obj)=> { // 更新联系人信息、更新个人信息
    return new Promise((resolve, reject)=> {
      fetch(url, {
        method: 'PUT',
        headers: new Headers({
          'Content-Type': 'aplication/json'
        }),
        credentials: 'include', // 带cookie
        body: JSON.stringify(obj)
      })
      .then(res=> { return res.text(); })
      .then(val=> { resolve(val); })
      .catch((error)=> { reject(error); })
    })
  },
  deleteData: (url, obj)=> { // 删除联系人
    return new Promise((resolve, reject)=> {
      fetch(url, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'aplication/json'
        }),
        credentials: 'include', // 带cookie
        body: JSON.stringify(obj)
      })
      .then(res=> { return res.text(); })
      .then(val=> { resolve(val); })
      .catch((error)=> { reject(error); })
    })
  }
}
