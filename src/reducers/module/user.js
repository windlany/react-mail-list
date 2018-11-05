let initUserState = {
  id: '0',
  name: 'lan',
  tel: '12312321',
  psw: '111111'
}

const user = (state = initUserState, action)=> {
  switch(action.type) {
    case 'LOGIN':
      return action.userInfo;
    case 'SET_USER':
    console.log(Object.assign({}, state, action.user))
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
}

export default user;
